# iManageData — Claude Context

## What this project is

iManageData is a dealership intelligence platform targeting car dealership GMs and operators. The site is a static marketing landing page hosted on GitHub Pages at **imanagedata.com**.

Current state: early-stage, single landing page with hero section and a demo request modal.

## Tech stack

- Pure **HTML / CSS / JS** — no framework, no build step
- **Google Fonts**: Manrope (sans-serif body) + Newsreader (serif headlines)
- Hosted on **GitHub Pages** (CNAME → imanagedata.com)
- Local dev: `python3 -m http.server 8080`
- `package.json` exists with `claude` as a dependency (unused for now)

## File structure

```
index.html      — single-page layout
styles.css      — all styles and design tokens
script.js       — mobile nav, typewriter, modal logic
CNAME           — imanagedata.com
.gitignore      — excludes node_modules/, package-lock.json
```

## Design system (CSS tokens)

Defined in `:root` in `styles.css`:

| Token | Value | Use |
|---|---|---|
| `--bg` | `#f5efe2` | Warm beige page background |
| `--surface` | `#ffffff` | Cards, modal |
| `--text` | `#1b1712` | Primary dark text |
| `--muted` | `#6a6056` | Secondary/body text |
| `--blue` | `#1a4eb8` | Accent, links, cursor |
| `--border` | `rgba(27,23,18,0.14)` | Subtle borders |
| `--r` | `8px` | Border radius |
| `--ease` | `200ms ease` | Hover transitions |

## Key behaviours

### Typewriter animation
- Only the phrase `"finally answering back."` is typed out on page load
- Target: `<span class="typewriter-target">` inside the `h1`
- Speed: 80ms per character
- Blinking blue `|` cursor fades out after typing completes
- The `h1` `min-height` is locked before clearing to prevent layout shift

### Demo modal
- Triggered by `#open-demo` (nav) or `.demo-trigger` (hero button)
- Contains an embedded Zoho form iframe
- Zoho form URL: `https://forms.zohopublic.com/adminimana1/form/Contact/formperma/DQ9kvwdxn9oWN9lnCeAIU3ZSAxzMr3v3zV6RZZosVBU`
- Closes on ×, backdrop click, or Escape key

### Animations
- Hero subheading and CTA button are **static** (no entrance animation)
- `.reveal` / `is-visible` scroll observer exists in JS but is not currently used by any elements

## Preferences

- Keep changes **framework-free** — plain HTML/CSS/JS only unless explicitly asked
- Always **commit and push** after making changes
- Do not add comments, docstrings, or extra abstractions beyond what is needed
- Responsive breakpoint at `768px`
