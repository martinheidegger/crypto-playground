const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "https:/crypto-playground/",
  configureWebpack: {
    resolve: {
      fallback: {
        stream: require.resolve("stream-browserify")
      }
    }
  }
})
