/** @type {import('next').NextConfig} */
const nextConfig = {
  // This site is a client-rendered brochure website with no API routes or
  // server-only features, so export it as static files for Cloudflare Workers.
  output: "export",
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
