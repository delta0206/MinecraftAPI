/* eslint-disable @typescript-eslint/no-var-requires */

const withAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = process.env.NODE_ENV === 'production' ? withAnalyzer(nextConfig) : nextConfig
