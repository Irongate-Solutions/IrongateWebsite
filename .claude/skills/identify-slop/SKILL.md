---
name: identify-slop
description: Audit the website's copy for AI-slop writing patterns and flag passages that need a human rewrite. Use when the user asks to check content quality, review copy for AI-sounding text, run a slop check, or before publishing new/revised page content.
---

# Identify Slop

Audit this site's written content for the telltale characteristics of AI-generated filler ("slop") and produce a flag report. This skill **identifies and reports** — it does not rewrite anything unless the user explicitly asks for rewrites afterward.

## Voice standard to judge against

Irongate's stated content philosophy: direct, technical, specific, "no consultancy theater." Copy should sound like an engineer who has done the work talking to a plant manager — concrete systems, numbers, and outcomes. Anything that could appear verbatim on any other consultancy's website is a failure, even if grammatically flawless.

## What to scan

Scan user-facing prose only (skip code, config, frontmatter keys — but DO check frontmatter *values* like `problem:`, `outcome:`, `description:`):

1. `src/content/insights/*.md` — article body and frontmatter descriptions
2. `src/pages/**/*.astro` — extract the visible text: headings, paragraphs, list items, CTAs, meta descriptions, and any copy strings passed as props
3. `src/components/*.astro` — components containing copy (e.g. ContactCTA, Footer, CapabilityCard defaults)
4. `src/data/company.json` and `src/data/navigation.json` — taglines, descriptions, labels
5. Any other `src/content/` collections that exist at scan time

If the user names specific files or a section (e.g. "just the insights"), scan only those.

## Slop signals

Flag a passage when it exhibits one or more of these. The test is never "did an AI write this?" — it's "does this read as generic filler?"

### Lexical tells
- Stock AI vocabulary: *delve, leverage, unlock, elevate, empower, seamless, robust, streamline, harness, navigate (a landscape), foster, holistic, cutting-edge, game-changer, transformative, journey, landscape, ecosystem, synergy, best-in-class, world-class, state-of-the-art, revolutionize, supercharge*
- Intensifiers doing no work: *truly, incredibly, crucially, notably, ultimately, essentially*
- "Solutions" used as a noun for nothing in particular (the company name gets a pass; body copy does not)

### Structural tells
- **"Not just X — it's Y"** constructions and their cousins ("more than a X", "isn't about X, it's about Y")
- Rule-of-three everywhere: three adjectives, three parallel clauses, three bolded bullets, repeated across sections
- Bullet lists where every item is `**Bolded Label:** one explanatory sentence` in identical rhythm
- Em-dash density noticeably above human baseline, especially for dramatic pauses
- Every paragraph the same length; every section the same shape
- Headings that are title-cased abstractions ("Driving Operational Excellence") instead of statements with content

### Rhetorical tells
- Generic openers: "In today's fast-paced manufacturing environment...", "Now more than ever...", "In the world of..."
- Empty summarizing closers: "The bottom line?", "At the end of the day...", paragraphs that restate the section they end
- Hedged non-claims: "can help ensure", "may potentially improve" — claims engineered to be unfalsifiable
- "Whether you're a small shop or a large enterprise..." audience-hedging
- Rhetorical questions used as section transitions ("So what does this mean for your plant?")
- Benefits asserted with zero mechanism or evidence ("boosts efficiency", "reduces costs") where the surrounding content never says *how* or *by how much*
- Fake specificity: statistics or scenarios that sound precise but have no source or grounding in Irongate's actual work

### Brand-fit tells (specific to this site)
- Copy that contradicts "no consultancy theater" by *being* consultancy theater
- Interchangeability test: could a competitor paste this paragraph onto their site unchanged? Flag it.
- Missing concreteness where the site promises it: a case study/result page with no named systems, no numbers, no failure modes discussed

## Severity levels

- **HIGH** — pure filler; says nothing a reader could act on or verify; must be rewritten or cut
- **MEDIUM** — has real content but wrapped in slop patterns; salvageable with an edit
- **LOW** — isolated tell (one stock phrase, one hedge) in otherwise sound copy; quick word-level fix

## Procedure

1. Enumerate files in scope with Glob, then read each one fully. Use Grep for a first pass on lexical tells across the scope, but do not rely on grep alone — structural and rhetorical slop only shows up when reading the passage in context.
2. Judge each passage against the signals above **and** the voice standard. A passage with zero banned words can still be HIGH-severity slop; a passage using "streamline" once in a genuinely specific sentence might not be worth flagging at all.
3. Collect findings with exact locations.

## Report format

Deliver a single report in the final message:

```
## Slop Audit — <scope>

Files scanned: N | Flags: X high, Y medium, Z low

### HIGH
- [file.md:12-15](src/content/insights/file.md#L12-L15) — quote the offending text (trim to ~2 lines)
  Why: <which signal(s) and why it fails the voice standard>
  Direction: <one sentence on what a rewrite needs — the missing specific, the claim to ground, the structure to break>

### MEDIUM
...

### LOW
...

### Clean
<files with nothing worth flagging — say so, don't invent findings>
```

Rules for the report:
- Every flag quotes the actual text and links to the file and line range
- "Direction" is guidance for the rewrite, not the rewrite itself
- Do not pad: if the copy is good, the correct output is a short report saying so. Manufacturing findings to look thorough is itself slop.
- End by offering to apply rewrites, but do not modify any file in this pass.
