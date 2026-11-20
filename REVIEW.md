# MAXIVERSE site review — `review/opencode-2026-11-20`

Branch: `review/opencode-2026-11-20` (clone of JustSolDev/maxi, live at https://maxiverse-pi.vercel.app). Fixes committed LOCALLY only; not pushed, not deployed, no PR opened.

Browser testing: `python3 -m http.server 8090` + `node ~/Documents/Infrastructure/project-status/mv-shot.mjs http://localhost:8090/ /tmp/mv-shots`, screenshots inspected at desktop (1280×800) and iPhone 13 (390×844) viewports, including post-dive (enter-gate → 3D planet) and all four community-suite modals on phone.

## Findings (severity ordered)

None found that block the site. The branch was already in good shape from prior work; remaining review items were finish-up polish.

1. **Informational — suite canvas text could overflow on long callsigns/tags.** PFP studio and rank dossier used `fillText` without `maxWidth`, so long custom text could clip past the canvas edge. Fixed with `maxWidth` clamping on every `fillText`.
2. **Informational — PFP/dossier "copy image" buttons failed silently.** When the clipboard was blocked (permissions / insecure context), the `catch` block did nothing, giving no feedback. Fixed to report "COPY BLOCKED — DOWNLOADING PNG" and fall back to downloading the rendered PNG, mirroring the honest CA-copy behavior already in place.
3. **Informational — dead video-recorder CSS remained.** The recorder was removed in `50a56e1`, but `.video-studio-body`, `#studioCompositeCanvas`, `.rec-indicator` (and its `pulseDot` animation) and related rules were still in `style.css`. Nothing in HTML/JS references them. Removed.

Console/runtime: no page errors, no failed requests on either viewport. One benign WebGL driver warning on desktop ("GPU stall due to ReadPixels") and one transient image `net::ERR_CONNECTION_RESET` that re-fetches fine on retry (server returned 200 when re-tested). Not a code issue.

## What was fixed (commit hashes, all on this branch, newest first)

- `8a4a63a` — Remove dead promo video-recorder styles from stylesheet.
- `a7a5974` — Report PFP/dossier image copy failures honestly with download fallback.
- `f8229ac` — Clamp suite canvas text to bounds; redraw PFP/rank canvases once display fonts load (also mobile lock-offset nudge carried from the pre-existing uncommitted edit).
- `90b0c4a` — Report clipboard failures honestly, keep the CA selectable, and show real UTC time (prior agent).
- `05ac9a9` — Make suite dialogs accessible and load the DexScreener iframe on demand (prior agent).
- `078e92c` — Compress citizen and logo PNGs (10.7 MB page image payload down to 1.6 MB) (prior agent).
- `4c4bdce` — Fix mobile intro/nav/HUD overlap and keep desktop studio layouts two-column (prior agent).
- `49dc620` — Add SEO/share metadata, an optimized favicon, and image dimensions (prior agent).
- `50a56e1` — Remove video recorder and fix navbar brand + MAXI WORLD ORDER headline layout (prior agent).
- `444dec7` — Rebrand to MAXI WORLD ORDER (MWO), add Green-Candle Overdrive Mode, and add MWO Cult Rank & Conviction Calculator (prior agent).
- `1b8a34a` — Initial launch: Planet Maxi 3D interactive experience, 36-citizen vault, PFP studio, video recorder, and mobile optimization (base).

## Browser-test results (screenshots at /tmp/mv-shots and /tmp/mv-dive-shots / /tmp/mv-modal2-shots)

| Viewport / state | Result |
|---|---|
| Desktop intro gate (1280×800) | Clean layout; CA copy, social pills, orbit/gyro/lock chips all present; no errors |
| Phone intro gate (iPhone 13) | Clean mobile compaction; CA code ellipsized correctly; no errors |
| Phone scrolled | Same as intro gate; no horizontal overflow |
| Post-dive desktop (1280×800) | Planet + surface pins + HUD render; no errors (one transient image reset, retries OK) |
| Post-dive phone (iPhone 13) | OG Maxi centered above HUD; mobile lock-offset fix works; no horizontal overflow |
| PFP studio modal phone | Renders citizen, banner, export PNG and copy buttons; no errors |
| Rank dossier modal phone | Renders dossier card, projections, export/copy; no errors |
| Vault modal phone | 36-citizen grid with filters; no errors |

## Template suggestions (from ~/Projects/Shared-data/Templates)

Read `Templates/README.md` and `CRYPTO-FEATURES.md`. The site already has working equivalents for most templates, so nothing was integrated (per the brief: only integrate if it clearly fixes a real gap and stays small).

| Template | Assessment |
|---|---|
| responsive-page-layout | Already covered by the site's own media queries (mobile stacking, two-column desktop). No gap. |
| launch-controls | Already integrated inline (CA box with copy, Buy/Chart/Explorer/social pills, rel=noopener). No gap. |
| spinning-logo | Site already has a spinning 3D planet/logo stage. Optional aesthetic only; not integrated. |
| 3d-mascot-viewer | Site already has the Three.js Planet Maxi with 36 citizen pins. No gap. |
| ui-sound-kit | Site already has `SoundEngine` (Web Audio, off-by-default toggle, reduced-motion aware). No gap. |
| product-docs-shell | Not applicable — this is a single-page interactive experience, not a docs site. |
| meme-sticker-exporter | Possible suggestion: the PFP studio already exports PNGs; a sticker/meme variant could be added later but is not a gap. |
| saved-shareable-looks | Possible suggestion: PFP presets exist but aren't shareable/saveable; a future enhancement, not integrated. |

Not integrated: none clearly fix a real gap while staying small.

## Anything I couldn't verify

- Real devices (iPhone/Android), Safari, Firefox, screen readers — only headless Chromium on this Mac was available per the helper.
- Live clipboard copy in a real browser with permissions granted — tested the code path; the honest-failure branch runs when `navigator.clipboard.write` rejects, which headless Chromium simulates.
- DexScreener live data — the poller hits api.dexscreener.com; terminal shows LIVE values when reachable, falls back gracefully otherwise. Verified code path, not a live number.
- `maxi.png` (72 KB) appears to be unused (only `maxi Background Removed.png` is referenced). Left as-is since it's a pre-existing asset, not a review finding.

## Branch rule

All commits are local on `review/opencode-2026-11-20`. Not pushed, not deployed, no PR opened.
