# CLAUDE.md

## Tech Stack
- Plain HTML, CSS, and JavaScript only.
- No frameworks or libraries (no React, Vue, Tailwind, jQuery, etc.).
- No build step: files are opened or served exactly as written.

## Project Structure
- `CLAUDE.md`: these instructions.
- `index.html`: portal homepage with one card per tool.
- `css/style.css`: shared styles and the light/dark colours.
- `js/theme.js`: light/dark toggle (remembers the choice).
- `tools/solder-checker/`: the Solder Joint Checker (`index.html`, `checker.js`).

Update this section as files and folders are added.

## Key Requirements
1. Every page must be responsive and work on desktop, tablet and phone.
2. Users can toggle between a light and a dark theme. The default is the light theme.
3. Text must stay easy to read, with good contrast, in both the light and the dark theme.

## Feature Plan
A portal of small electronics engineering tools for teachers and students.

### Portal structure
- **Homepage (`index.html`):** a short intro and one card per tool.
- **Opening a tool:** clicking a card opens that tool's own page.
- **Getting back:** every tool page has a header with the portal name (links home) and a "Back to all tools" link.
- **On every page:** the same header, the light/dark toggle, and shared styles (`css/style.css`, `js/theme.js`).
- **Adding a tool later:** create `tools/<tool-name>/` with its own `index.html` and script, then add its card to the homepage.

### Phase 1: portal + Solder Joint Checker
- [x] Shared base: layout, styles, light/dark toggle (light by default), readable contrast.
- [x] Homepage with one tool card.
- [x] Solder Joint Checker (`tools/solder-checker/`), kept simple: add a photo of a joint; get "Looks good" or "Needs work" with a one-line reason. Currently shows a labelled demo result.
- [ ] Real photo analysis by an AI image service through one small server function (`functions/api/analyse.js`), hosted on Cloudflare Pages. The API key is kept in Cloudflare's settings, never in the code. A daily limit caps cost.
  The real AI is switched on once the accounts and key exist.
- Note: the server function needs the Tech Stack rules above to be updated first.

### Phase 2 and later
- More electronics tools, added one at a time (to be decided).

## Rules for Claude
- Explain technical terms in plain language.
- Ask before making big changes.
- When something is unclear, ask rather than guess.
