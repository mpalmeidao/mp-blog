# A11Y Decisions

Compliance profile: **Standard (AA)** — WCAG 2.2 AA.

## Contrast matrix

Measured with the WCAG relative-luminance formula at palette definition time.

### Light theme (`--bg #f7f5f2`)

| Pair | Foreground | Background | Ratio | Floor |
|------|------------|------------|------:|-------|
| Body text | `#1a1814` | `#f7f5f2` | 16.29:1 | 4.5:1 |
| Muted text | `#5c564e` | `#f7f5f2` | 6.66:1 | 4.5:1 |
| Link | `#1b4d38` | `#f7f5f2` | 8.91:1 | 4.5:1 |
| Link hover | `#0f3326` | `#f7f5f2` | 12.68:1 | 4.5:1 |
| Text on surface | `#1a1814` | `#efeae3` | 14.81:1 | 4.5:1 |
| Border / UI | `#8a8378` | `#f7f5f2` | 3.45:1 | 3:1 |
| Focus ring | `#1a1814` | `#f7f5f2` | 16.29:1 | 3:1 |

### Dark theme (`--bg #161411`)

| Pair | Foreground | Background | Ratio | Floor |
|------|------------|------------|------:|-------|
| Body text | `#f3efe7` | `#161411` | 16.03:1 | 4.5:1 |
| Muted text | `#b7aea3` | `#161411` | 8.40:1 | 4.5:1 |
| Link | `#9ddec0` | `#161411` | 11.94:1 | 4.5:1 |
| Link hover | `#c9f3e0` | `#161411` | 15.22:1 | 4.5:1 |
| Text on surface | `#f3efe7` | `#2a2622` | 13.09:1 | 4.5:1 |
| Border / UI | `#6e675e` | `#161411` | 3.30:1 | 3:1 |
| Focus ring | `#f3efe7` | `#161411` | 16.03:1 | 3:1 |

## Pattern choices

| Pattern | Choice | Rationale |
|---------|--------|-----------|
| Outline active state | `aria-current="location"` + heavier weight + inset bar | Active section is not color-only |
| Mobile outline | Native `<details>` / `<summary>` | Keyboard and AT support without a custom disclosure |
| Theme control | Native `<button>` with `aria-label` | Visible label “Tema” contained in the accessible name |
| Post outline | `<nav>` labelled by visible heading | Landmark for in-page navigation |
