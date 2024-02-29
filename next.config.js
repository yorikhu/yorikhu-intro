/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/intro",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
