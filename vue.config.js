module.exports = {
  // publicPath: process.env.NODE_ENV === "production" ? "//your_url" : "/",
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  filenameHashing: true,
  pages: {
    index: {
      // entry for the pages
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "首页"
    }
  },
  lintOnSave: true,
  runtimeCompiler: false,
  transpileDependencies: [],
  // 生产环境 sourceMap
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      // new MyAwesomeWebpackPlugin()
    ]
  },
  // chainWebpack: config => {},
  // 配置高于chainWebpack中关于 css loader 的配置
  css: {
    // 是否开启支持 foo.module.css 样式
    modules: true,
    // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
    extract: true,
    // 是否构建样式地图，false 将提高构建速度
    loaderOptions: {
      css: {
        // options here will be passed to css-loader
      }
    }
  },

  devServer: {
    open: true,
    host: "127.0.0.1",
    port: 3000,
    https: false,
    hot: true,
    proxy: null
    // 代理设置
    // proxy: {
    //   '/api': {
    //     target: '<url>',
    //     changeOrigin: true
    //   }
    // }
  },
  // 构建时开启多进程处理 babel 编译
  parallel: require("os").cpus().length > 1,
  // 第三方插件配置
  pluginOptions: {}
};
