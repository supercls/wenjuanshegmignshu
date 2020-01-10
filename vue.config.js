const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
const AutoDllPlugin = require('autodll-webpack-plugin');
const resolve = dir => path.resolve(__dirname, `src/${dir}/`);
const buildMode = () => {
  const argv = process.argv;
  return argv[argv.indexOf('--project-mode') + 1];
};

const isPro = process.env.NODE_ENV === 'production';
const isAnalysis = process.env.VUE_APP_SELF_MODE === 'analysis';
module.exports = {
  // 关闭eslint
  lintOnSave: false,
  publicPath: (isPro && !isAnalysis) ? './' : './',
  productionSourceMap: false,
  devServer: {
    open: true,
    port: 8089,
    proxy: {
      '/api': {
        target: '<url>',  //接口前面需加上/api/防止和路由冲突 fetch.js也需要加
        ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  },
  chainWebpack: config => {
    // 这里用到了webpack.DefinePlugin
    config.resolve.symlinks(true) // 修复热更新失效
    config.plugin('define').tap(args => {
      // 这里必须要使用`"string"`,字符串必须要单双引号俩层嵌套，否则使用到process.env的时候会报错
      // 文档：这个插件直接执行文本替换，给定的值必须包含字符串本身内的实际引用。通常，有俩种方式
      // 来达到这个效果，使用'"production"',或者使用JSON.stringify('production')
      args[0]['process.env'].MODE = `"${buildMode()}"`;
      return args;
    });
    // 这里的具体配置都可以在文档的链接中找到
    // 配置别名: 这里配置的多了会影响打包性能
    config.resolve
      .alias
      .set('@', resolve(''))
      .set('api', resolve('api'))
      .set('views', resolve('views'))
      .set('components', resolve('components'))
      .set('assets', resolve('assets'))
      .end();
    // // 扩展名省略
    // .extensions
    // .add('.scss');
  },
  css: {
    loaderOptions: {
      // 自动引入全局scss
      sass: {
        data: `
          @import "assets/styles/_mixins.scss";
          @import "assets/styles/_vars.scss";
        `
      }
    }
  },
  pwa: {
    // 设置favicon图标路径
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  },
  configureWebpack: config => {
    const plugins = [
      new HardSourceWebpackPlugin(),
      new AutoDllPlugin({       //对于第三方插件无需每次都重新打包编译，离线缓存
        inject: true, // will inject the DLL bundle to index.html
        debug: true,
        filename: '[name]_[hash].js',
        path: './dll',
        entry: {
          'vendor_vue': ['vue', 'vuex', 'vue-router'],
          'vendor_ui': ['vue-lazyload', 'vue-awesome-swiper', 'nprogress','mint-ui'],
          'vendor_tools': ['register-service-worker', 'axios', 'vconsole', 'core-js']
        }
      })
    ];
    if (isPro) {
      plugins.push(
        new TerserPlugin({  //改用TerserPlugin，否则会打包问题
          terserOptions: {
            compress: {
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ['console.log']//移除console
            },
          },    
          sourceMap: true,
          parallel: true
        }),
        // 开启gzip
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8
        })
      );
    }
    if (isAnalysis) { // 分析模式加载打包分析插件
      plugins.push(new BundleAnalyzerPlugin());
    }
    config.plugins = [
      ...config.plugins,
      ...plugins
    ];
  }
};
