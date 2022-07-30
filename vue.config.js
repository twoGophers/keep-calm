const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
})


module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/style/Reset.scss";`,
      },
    }
  }
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/keep-calm/'
    : '/'
}