/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',                // 静的エクスポートを有効化
  trailingSlash: true,             // 末尾に / を付与（GitHub Pages 404 防止）
  images: { unoptimized: true },   // 画像最適化をオフ（export 対応）
  // GitHub Pages 用のパスプレフィクス
  basePath: isProd ? '/prime_reform_gym' : '',
  assetPrefix: isProd ? '/prime_reform_gym/' : '',
};

export default nextConfig;
