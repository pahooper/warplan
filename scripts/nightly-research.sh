#!/usr/bin/env bash
# Warplan nightly component research + QC
# Phase 1: Research agent updates prices, availability, reviews, benchmarks
# Phase 2: QC agent independently verifies and fixes any errors
# Runs via crontab — no interactive input
set -euo pipefail

export HOME="/home/pnod"
export PATH="$HOME/.local/share/mise/shims:$HOME/.local/share/mise/installs/bun/1.3.10/bin:$HOME/.local/bin:$PATH"

PROJECT="$HOME/dev/projects/warplan"
LOG="$PROJECT/scripts/research.log"
SKILL_DIR="$HOME/.claude/skills/WarplanResearch/Workflows"

{
  echo "=== Warplan Research: $(date -Iseconds) ==="

  cd "$PROJECT"

  # Ensure clean working tree before starting
  if ! git diff --quiet; then
    echo "ERROR: Dirty working tree — skipping research run"
    exit 1
  fi

  # Pull latest to avoid conflicts
  git pull --rebase origin svelte 2>&1 || true

  # ── Snapshot: Save pre-update backup ──────────────────────────
  SNAP_DIR="$PROJECT/scripts/snapshots"
  mkdir -p "$SNAP_DIR"
  cp src/lib/data/components.ts "$SNAP_DIR/components-$(date +%Y-%m-%d).ts"
  # Keep last 30 days of snapshots
  find "$SNAP_DIR" -name "components-*.ts" -mtime +30 -delete 2>/dev/null || true

  # Unset to allow running from within another Claude session (e.g. test runs)
  unset CLAUDECODE 2>/dev/null || true

  # ── Phase 1: Research Agent ──────────────────────────────────
  echo ""
  echo ">>> Phase 1: Research Agent starting..."
  RESEARCH_WORKFLOW=$(cat "$SKILL_DIR/NightlyUpdate.md")

  RESEARCH_PROMPT="You are running the warplan nightly component research workflow. Follow these instructions exactly:

$RESEARCH_WORKFLOW

Execute all steps now. This is an autonomous run — do not ask questions, make your best judgment on all decisions. If unsure about a price, keep the existing value.

IMPORTANT: Do NOT commit or push yet. Stop after Step 4 (Verify). The QC agent will handle commit/push after validation."

  printf '%s' "$RESEARCH_PROMPT" | claude -p \
    --permission-mode bypassPermissions \
    --allowedTools "Edit,Read,Write,Bash,Grep,Glob,WebSearch,WebFetch" \
    2>&1

  echo ">>> Phase 1 complete: $(date -Iseconds)"

  # Check if research agent made any changes
  if git diff --quiet src/lib/data/components.ts; then
    echo ">>> No changes from research agent — skipping QC"
    echo "=== Complete (no changes): $(date -Iseconds) ==="
    echo ""
    exit 0
  fi

  # ── Phase 2: QC Agent ────────────────────────────────────────
  echo ""
  echo ">>> Phase 2: QC Agent starting..."
  QC_WORKFLOW=$(cat "$SKILL_DIR/QualityCheck.md")

  QC_PROMPT="You are the QC agent for the warplan nightly component research pipeline. The research agent just edited components.ts. Your job is to independently verify every change and fix anything that's wrong.

$QC_WORKFLOW

Execute all steps now. This is an autonomous run — do not ask questions. After QC is complete:

1. If you made fixes, run \`bun run check\` to confirm TypeScript passes
2. Stage and commit ALL changes (research + your fixes):
   \`\`\`
   git add src/lib/data/components.ts
   git commit -m 'data: nightly component update — $(date +%Y-%m-%d)

   Updated: [list categories with changes]
   QC: [list any corrections made, or \"all verified\"]
   Sources: [key sources checked]

   Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>'
   \`\`\`
3. Push: \`git push origin svelte\`
4. Output your QC report"

  printf '%s' "$QC_PROMPT" | claude -p \
    --permission-mode bypassPermissions \
    --allowedTools "Edit,Read,Write,Bash,Grep,Glob,WebSearch,WebFetch" \
    2>&1

  echo ">>> Phase 2 complete: $(date -Iseconds)"
  echo "=== Complete: $(date -Iseconds) ==="
  echo ""
} >> "$LOG" 2>&1
