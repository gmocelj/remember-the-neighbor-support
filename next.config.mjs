/** @type {import('next').NextConfig} */

// GitHub Pages PROJECT site is served from a subpath:
//   https://gmocelj.github.io/remember-the-neighbor-support/
// so we need basePath + assetPrefix. If you later move to a custom domain
// (e.g. an apex domain via CNAME), set REPO_BASE_PATH to '' and add a CNAME.
const repoBasePath = process.env.REPO_BASE_PATH ?? '/remember-the-neighbor-support'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: repoBasePath,
  assetPrefix: repoBasePath || undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
