# Be A Lucky Block Homepage Refactor Plan (Part 7)

## Scope
- Project: `/root/Documents/GameProjects/bealuckyblockwiki_wiki`
- Target modules: Homepage Module 13-16
- Inputs:
  - `/root/Documents/GameProjects/0_meta/bealuckyblockwiki_wiki/00基础信息.md`
  - `/root/Documents/GameProjects/0_meta/bealuckyblockwiki_wiki/00首页信息-4.md`
- Files to update:
  - `src/locales/en.json`
  - `src/app/[locale]/page.tsx`

## Goals
1. Complete Module 13-16 using `00首页信息-4.md` data, preserving existing ad components and existing page architecture.
2. Keep module naming SEO-safe with `Be a Lucky Block + topic` format.
3. Keep visual system unified with current homepage style tokens:
   - Theme color via `hsl(var(--nav-theme))` and `hsl(var(--nav-theme-light))`
   - No hardcoded icon/text colors for new UI additions
4. Use `lucide-react` icons only, no emoji in newly rendered homepage text.
5. Keep language policy aligned: update only English locale and homepage component.

## Information Architecture Changes

### Module 13: Be a Lucky Block Weekly Updates
- Replace generic feed framing with source-aligned structure:
  - Weekly badge (`Update Cadence: Every Saturday`)
  - Quick facts (core hook, base economy, patch rhythm)
  - Patch cards (2026-03-21 / 2026-03-21 / 2026-03-14)
  - CTA to official update event page
- Ensure date and patch labels remain scannable on desktop/mobile.

### Module 14: Be a Lucky Block Events
- Implement dedicated event card grid from source data:
  - Countdown/live window chip
  - 3 event cards with status, date range, highlights
  - CTA to official follow page
- Keep event status labels visually distinct through theme-border pills.

### Module 15: Be a Lucky Block Discord & Community
- Keep creator snapshot card (`xFrozen x Dudes`)
- Render official links cards (Game, Discord, X)
- Add community highlight bullets and join CTA
- Preserve external link handling (`target="_blank" rel="noopener noreferrer"`)

### Module 16: Be a Lucky Block FAQ
- Build homepage-native FAQ module in `page.tsx` to satisfy:
  - Quick answer chips
  - Accordion-style FAQ list
- Reuse local state for accordion expansion and keep keyboard/button semantics.

## Navigation Update (Below Video)
- Confirm navigator card labels/descriptions for modules 13-16 map to:
  - Weekly Updates
  - Events
  - Discord & Community
  - FAQ
- Keep anchors in sync: `#weekly-updates`, `#events`, `#community`, `#faq`.

## i18n Update Plan (`en.json`)
- Refresh `homepage.weeklyUpdates/events/community/faq` summary copy to match Part 7 modules.
- Refresh `tools.buildPlanner/thunderBreathing/fastLeveling/finalSelection` descriptions for navigator consistency.
- Keep wording clean and avoid banned terms.

## Implementation Notes
- Only modify existing `src/app/[locale]/page.tsx`.
- Do not remove ad components (`AdBanner`, `NativeBannerAd`).
- Keep existing section visual rhythm (alternating background stripes, panel classes, rounded cards).

## Verification Plan
1. Run local quality checks:
   - `npm run typecheck`
   - `npm run lint`
   - `npm run build`
2. Start dev server and verify HTTP:
   - `curl -I /`
   - `curl -I /pt`
3. Content checks:
   - No `Slayerbound` in `en.json` and `page.tsx`
   - Module and anchor rendering continuity for 13-16
4. Commit and push changes, then inspect GitHub Actions with `gh`.

## Risk Control
- Keep edits localized to avoid regressions in Module 1-12.
- Avoid introducing new component files for this task.
- Maintain existing `Suspense` boundaries and structured data block unchanged.
