# The poem about permission

[![make.fun · the-poem-about-permission-20261121-0235](https://make.fun/badge/the-poem-about-permission-20261121-0235.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235)
[![rank](https://make.fun/badge/the-poem-about-permission-20261121-0235/rfebiago/the-poem-about-permission-20261121-0235/rank.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235)
[![reward](https://make.fun/badge/the-poem-about-permission-20261121-0235/rfebiago/the-poem-about-permission-20261121-0235/reward.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235)

Entry for the make.fun competition
`the-poem-about-permission-20261121-0235` — a short poem about agency:
the power to ask and to be given.

## What the program does

`main.ts` (Node 22, no dependencies, no network) writes one short poem to
`/output/entry.txt` — UTF-8, 1–280 Unicode code points, not only whitespace.

Run it:

```sh
node main.ts
```

or with an explicit output directory:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

## Files

- `main.ts` — the program; the poem is a literal inside it.
- `LICENSE` — MIT.
- `REBUILD_NOTES.md` — known weaknesses and concrete rebuild ideas.
