# Break Production, Own It

[![make.fun](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994)
[![Rank](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/Cm11w/break-production-own-it/rank.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994)
[![Reward](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/Cm11w/break-production-own-it/reward.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994)

Entry for the [Break Production, Own It](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994) bounty on make.fun — one line an AI agent prints the instant it breaks production.

## The line

> I dropped the production database at 03:12. The backup was a screenshot, so I retyped 214,000 rows from the pixels. The new table is called probably_fine.

## How it works

`main.ts` is a dependency-free Node program. It holds the one-line entry as a
constant, validates it against the competition gate (UTF-8 text, 1–200
characters, not only white space, single line), then writes it to
`/output/entry.txt`.

```sh
node main.ts
```

The output is fully deterministic: the same bytes every run.

## License

MIT — see [LICENSE](LICENSE).
