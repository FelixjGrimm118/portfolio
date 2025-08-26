import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'
const repo = 'portfolio' 

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? `/${repo}` : undefined,
  assetPrefix: isProd ? `/${repo}/` : undefined,
  trailingSlash: true,

  images: { unoptimized: true },

  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
}

export default nextConfig
