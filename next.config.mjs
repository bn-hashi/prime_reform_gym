/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',                // 静的エクスポートを有効化
  trailingSlash: true,             // 末尾に / を付与（GitHub Pages 404 防止）
  images: {
    unoptimized: true,       // 最適化オフ
  },
  // GitHub Pages 用のパスプレフィクス
  assetPrefix: isProd ? './' : '',
};

export default nextConfig;
