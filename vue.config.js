const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/crypto-playground/",
  configureWebpack: {
    resolve: {
      fallback: {
        buffer: require.resolve('buffer/'),
        stream: require.resolve("stream-browserify")
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
      }),
    ],
  }
})
