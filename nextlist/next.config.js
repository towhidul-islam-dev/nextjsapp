/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains : ["image.tmdb.org"],
    remotePatterns:[
      {
        protocol : 'https',
        hostname : 'lh3.googleusercontent.com',
        port: '',
        pathname: '',
      }
    ]
  }
}

module.exports = nextConfig
