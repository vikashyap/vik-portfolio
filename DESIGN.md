---
name: Vikas Kashyap
description: The portfolio as a pull request against the visitor's team.
colors:
  canvas: "#ffffff"
  subtle: "#f6f8fa"
  inset: "#eff2f5"
  line: "#d1d9e0"
  line-soft: "#e4e9ee"
  ink: "#1f2328"
  ink-muted: "#59636e"
  link: "#0f5bd8"
  add: "#1a7f37"
  add-strong: "#116329"
  add-bg: "#dafbe1"
  add-gutter: "#c6f2d0"
  del: "#cf222e"
  del-bg: "#ffebe9"
  del-gutter: "#ffd7d5"
  tab-active: "#fd8c73"
typography:
  display:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 3.25rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  section:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "2rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  subhead:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  meta:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
  code:
    fontFamily: "Red Hat Mono, ui-monospace, monospace"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.7
rounded:
  sm: "4px"
  md: "6px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.add}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    height: "44px"
    padding: "0 20px"
  button-primary-hover:
    backgroundColor: "{colors.add-strong}"
  button-default:
    backgroundColor: "{colors.subtle}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    height: "44px"
    padding: "0 20px"
  button-default-hover:
    backgroundColor: "{colors.inset}"
  label:
    backgroundColor: "{colors.add-bg}"
    textColor: "{colors.add-strong}"
    rounded: "{rounded.pill}"
    padding: "0 10px"
  tech-token:
    backgroundColor: "{colors.inset}"
    textColor: "{colors.ink}"
    typography: "{typography.code}"
    rounded: "{rounded.md}"
    padding: "2px 8px"
  input:
    backgroundColor: "{colors.subtle}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
---

# Design System: Vikas Kashyap

## Overview

The site is a pull request. Vikas "wants to merge 13 years of front-end work into `your-team:main`". Every section speaks code-review grammar: a repo bar with tabs, a PR title with an Open state, a diff where hype is struck red and practice lands green, review threads, file headers, a commit log, check rows, and a merge box as the closing call to action.

The audience is engineering leads who live in pull requests every day, so the grammar reads instantly and needs no decoration. The page is light, calm and dense in the way a good review is: hairline borders, small type for metadata, large type only for the PR title.

## Colors

Restrained palette. Neutrals carry the page; diff colours carry meaning.

### Primary
- **add** `#1a7f37`: the only action colour. Primary buttons, Open state, check marks, "Resolved".
- **add-bg / add-gutter**: added lines and their line-number gutters.

### Secondary
- **del** `#cf222e`, **del-bg**, **del-gutter**: removed lines only. Never used for buttons or decoration.
- **link** `#0f5bd8`: inline links, focus ring, branch chip text.

### Neutral
- **canvas** white, **subtle** `#f6f8fa` for file headers and bars, **inset** for tokens, **line** / **line-soft** for all borders, **ink** / **ink-muted** for text.

### Named Rules
- **Colour means diff.** Green is "adopt this", red is "remove this". Do not use either as decoration.
- **One active accent.** `tab-active` coral marks the current tab underline and nothing else.

## Typography

Schibsted Grotesk for all prose and headings. Red Hat Mono only for things that are code or data: file paths, diff lines, tech tokens, dates in the commit log, skill names.

### Hierarchy
- **display**: the PR title only, weight 600, tight tracking, with the muted `#13`.
- **section**: section titles (`Selected work`, `Experience`).
- **subhead**: sub-blocks inside the AI section.
- **body** 17px for the review comment and intros; 15px for list bodies.
- **meta** 12 to 13px for headers, counts and labels.

### Named Rules
- **Mono is for code, not for mood.** If it is not a path, a line of code, a token, or a date, it is set in the sans.

## Layout

- Max width 1280px, 16px gutters on mobile, 24px from `md`.
- Top block is a two-column PR layout: content `minmax(0,1fr)` plus a 280px sticky sidebar from `lg`. Below `lg` the sidebar renders as a bordered block after the hero.
- Sections below the AI block run full width, each opened by a title row with a right-aligned muted fact and a hairline under it.
- Section rhythm: 80px top on mobile, 96px from `md`. More space above a heading than below it.
- Long rows (formats, tooling, stack, earlier roles) become two-column grids from `sm`, stacked on phones.

## Elevation & Depth

Flat. Depth comes from borders and tinted bars, never shadows. Buttons carry a 1px bottom hairline shadow (`0 1px 0 rgba(31,35,40,0.1)`), the only shadow in the system.

## Shapes

6px radius on every box, button, input and token. Pills (999px) only for labels, counts and the Open state. Avatars are circles with a 1px `line` border.

## Components

### Buttons
Primary (green) for Book a call and form submit. Default (subtle grey with border) for Download CV and secondary actions. Sizes 32 / 36 / 44px. Icons 16px from lucide-react.

### Chips
- **Labels**: pill, tinted by meaning (`ai-enablement` green, `front-end` blue, the rest neutral).
- **Tech tokens**: mono, 12px, `inset` background, 6px radius.

### Cards / Containers
The container is a **file box**: 1px `line` border, 6px radius, a `subtle` header bar with a mono path, content below. Never nest a file box inside a file box, except a review comment inside a diff thread, which is the real grammar.

### Inputs / Fields
`subtle` fill, `line` border, visible label above each field, focus turns border `link` with a 2px soft ring and white fill.

### Navigation
Repo bar: avatar + `vikashyap / vikas-kashyap`, social icon buttons, Book a call. Tab row below with counts; active tab gets a 2px coral underline and semibold text, set by IntersectionObserver.

### Diff (signature component)
Table rows with line-number gutter, sign column and code. Removed lines get `del-bg`, a red strike and screen-reader "Removed:" text; added lines get `add-bg` and "Added:". On load the hero lines reveal left to right in sequence (clip-path, 520ms, ease-out-expo) and the strike draws after. Reduced motion shows the final state.

### Suggestion review (signature interaction)
A file box with AI-written code, a review comment explaining the defect, a "Suggested change" block and a Commit suggestion button that swaps the file to a unified diff and marks the thread Resolved. Label it "Example"; it is demonstration code.

## Do's and Don'ts

### Do:
- Write every new section as a real review artefact: file box, thread, commit row, check row.
- Keep claims factual. Company, product, dates and stack beat adjectives.
- Put a Book a call action within one scroll of any major section.

### Don't:
- Don't bring back gradients, glass, glow or purple. The old portfolio used them and read as generic.
- Don't add stats that are not confirmed (see PRODUCT.md).
- Don't use eyebrows or kickers above headings.
- Don't use red or green outside diff meaning.
