/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',                // 静的エクスポートを有効化
  trailingSlash: true,             // 末尾に / を付与（GitHub Pages 404 防止）
  images: {
    unoptimized: true,       // 最適化オフ
    loader: 'custom',        // カスタムローダーを指定
    loaderFile: './image-loader.js', 
  },
  // GitHub Pages 用のパスプレフィクス
  basePath: isProd ? '/prime_reform_gym' : '',
  assetPrefix: isProd ? '/prime_reform_gym/' : '',
};

export default nextConfig;
