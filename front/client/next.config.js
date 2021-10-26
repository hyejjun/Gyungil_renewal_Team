const withPlugins = require('next-compose-plugins')
const sass = require('@zeit/next-sass')
const css = require('@zeit/next-css')

const nextConfig = {
  webpack: function(config){
  config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/, 
      use: {
      loader: 'url-loader',
          options: {
          limit: 100000,
          name: '[name].[ext]'
      }}
  })
  return config
  }
}

module.exports = withPlugins([
  [css],
  [sass, {
      cssModules: true
  }]
], nextConfig)

module.exports = {
  webpack: (config, { buildId, dev }) => {
    // This allows the app to refer to files through our symlink
    config.resolve.symlinks = false
    return config
  }
}

