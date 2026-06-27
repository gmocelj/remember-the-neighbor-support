# Remember the Neighbor — Support Site

Marketing landing page, support/FAQ, **Privacy Policy**, and **Terms of Use** for
the [Remember the Neighbor](https://github.com/gmocelj/remember-the-neighbor) app.

Built with Next.js (static export) and Tailwind CSS v4, deployed to GitHub Pages.

## URLs (after deploy)

Served from a GitHub Pages **project** site, so everything lives under a subpath:

| Page    | URL |
| ------- | --- |
| Home    | `https://gmocelj.github.io/remember-the-neighbor-support/` |
| Support | `https://gmocelj.github.io/remember-the-neighbor-support/support/` |
| Privacy | `https://gmocelj.github.io/remember-the-neighbor-support/privacy/` |
| Terms   | `https://gmocelj.github.io/remember-the-neighbor-support/terms/` |

Use the **Privacy** and **Support** URLs in App Store Connect and Google Play Console.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Deploy

Push to `main`. The `.github/workflows/pages.yml` workflow builds and deploys automatically.

**One-time setup:** in the GitHub repo, go to **Settings → Pages → Build and
deployment → Source** and select **GitHub Actions**.

## Editing content

- **Site constants** (URL, contact email, app store links, last-updated date):
  `lib/site.ts`
- **Privacy Policy:** `app/privacy/page.tsx`
- **Terms of Use:** `app/terms/page.tsx`
- **Support / FAQ:** `app/support/page.tsx`
- **Landing page:** `app/page.tsx`

## Moving to a custom domain later

1. Add a `CNAME` file in `public/` with your domain.
2. Set the env var `REPO_BASE_PATH=''` for the build (or edit the default in
   `next.config.mjs` and `lib/site.ts`).
3. Configure DNS and enable the custom domain in GitHub Pages settings.
