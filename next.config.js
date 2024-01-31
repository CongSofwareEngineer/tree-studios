/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: true
})
const path = require('path')
const env = require('./env.json')
const nextConfig = {
  experimental: {
    // // cpus: 16,
    // workerThreads: true,
    // optimizeCss: true, // enabling this will enable SSR for Tailwind
    // swcMinify: true,
    // gzipSize: true
    // optimizeServerReact: true,
    // serverMinification: true,
    // optimizePackageImports: [
    //   '@react-spring/parallax',
    //   '@react-spring/three',
    //   '@react-three/drei',
    //   '@react-three/fiber',
    //   '@types/three',
    //   'zustand',
    //   'bignumber.js'
    // ],
    // forceSwcTransforms: true,
    // swcTraceProfiling: true
    // isrMemoryCacheSize: 10000000
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  compress: true,
  reactStrictMode: true,
  cleanDistDir: false,
  // staticPageGenationTimeout: 120,
  swcMinify: true,
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      minify: true
    }
  },
  env,
  images: {
    domains: [
      'images.unsplash.com',
      'ipfs.pantograph.app',
      'ipfs.pantograph.app/ipfs',
      'ipfsgw.bountykinds.com',
      'skywalker.infura-ipfs.io',
      'ipfs.filebase.io',
      'ucarecdn.com'
    ]
  }
}
// module.exports = withBundleAnalyzer(nextConfig);
module.exports = nextConfig
