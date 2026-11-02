// Single source of truth for site-wide constants.
// Update SITE_URL here if you move to a custom domain.

export const REPO_BASE_PATH =
  process.env.REPO_BASE_PATH ?? '/remember-the-neighbor-support'

export const SITE_URL =
  `https://gmocelj.github.io${REPO_BASE_PATH}`

export const APP_NAME = 'Remember the Neighbor'
export const APP_TAGLINE = 'Remember who lives where.'
export const SUPPORT_EMAIL = 'support@trevvy.app'

// Public Apple bundle lookup verified 2 November 2026.
// Keep Play hidden until its public listing is verified.
export const APP_STORE_URL = 'https://apps.apple.com/app/id6770633784'
export const PLAY_STORE_URL = ''

export const LAST_UPDATED = 'November 2, 2026'
export const CONTENT_UPDATED = '2026-11-02'
