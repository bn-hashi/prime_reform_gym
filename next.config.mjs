const isNetlify = Boolean(process.env.NETLIFY) 
const isProd = process.env.NODE_ENV === 'production';

const basePath = !isNetlify && isProd
  ? '/prime_reform_gym'
  : ''

/** @type {import('next').NextConfig} */

export default {
  output: 'export',
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};
