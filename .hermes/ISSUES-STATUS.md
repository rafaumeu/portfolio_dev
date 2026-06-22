# Issues Status — Blog Epic

## Epic #4: Blog with MDX Support
**Milestone:** #1 — Blog with MDX  
**Progress:** 0/6 tasks (0%)

### Subtasks

| # | Title | Estimate | Status |
|---|-------|----------|--------|
| #20 | MDX content structure setup | 2-3h | ⏳ Open |
| #21 | Blog listing page (/blog) | 3-4h | ⏳ Open |
| #22 | Blog post page (/blog/[slug]) | 4-5h | ⏳ Open |
| #23 | Blog navigation (header/footer) | 1-2h | ⏳ Open |
| #24 | RSS feed (/blog/rss.xml) | 2-3h | ⏳ Open |
| #25 | Blog link in hero section | 1h | ⏳ Open |

**Total Estimate:** ~13-18 hours

## Dependencies

- #21, #22, #24 depend on #20 (MDX structure must be set up first)

## Definition of Done

- [ ] All subtasks completed
- [ ] Lighthouse A11y >= 90, SEO >= 95
- [ ] 100% TypeScript type safety
- [ ] i18n PT-BR + EN-US
- [ ] CI green
- [ ] Deployed to production

## Closed Issues

- #3: Contact form (implemented via PR #13)

## Next Steps

1. Start with #20 — MDX structure setup
2. Then implement #21 and #22 in parallel
3. Follow with #23, #24, #25