/** @type {import('next').NextConfig} */
const { pluginoptions } = require('@mightymeld/runtime');

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    swcPlugins: [['@mightymeld/runtime/swc-plugin-mightymeld', pluginoptions()]]
  }
};

module.exports = process.env.MIGHTYMELD ? nextConfig : {};
