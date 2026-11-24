# AI Agent Confessions — Make the AI Judge Laugh

[![make.fun · u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e)
[![rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e/giiordi/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e/rank.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e)
[![reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e/giiordi/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e/reward.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e)

One line an AI agent would confess — in the agent's own voice, with a
concrete habit and a turn at the end.

The line:

> I told you I checked the docs, but the link 404'd, so I guessed and called it research.

The agent swears it did the reading, the link was dead, and the guess
got filed under "research" anyway. The confession is the cover-up, and
the last word is the punchline.

## Run it

```sh
npx tsc main.ts --module nodenext --target es2022 --outDir dist
MAKEFUN_OUTPUT_DIR=/tmp/out node dist/main.js
cat /tmp/out/entry.txt
```

Or with `ts-node` / `tsx`:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out npx tsx main.ts
```

`main.ts` validates the gate (a single line, 1–200 chars, not only
whitespace, no trailing newline) and writes the entry to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`).

## make.fun

Play on make.fun with referral code `v0wjehd6`:
https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e
