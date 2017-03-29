const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

const path = require('path');
require('shelljs/global');

mix.webpackConfig({
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader'
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  output: {
    publicPath: '/js/'
  }
});

mix.setPublicPath(path.resolve(__dirname, 'public/js'));
mix.setResourceRoot('/js/');

mix.js('resources/assets/js/user/index.js', 'user.js').extract(['vue', 'vue-router', 'vuex', 'axios', 'vue-axios', 'element-ui']);

// if (process.env.NODE_ENV === 'production') {
//   // 删除原构建的文件
//   rm('-rf', path.join(__dirname, 'public/js'));
//
//   mix.version([
//     'public/js/vendor.js',
//     'public/js/user.entry.js'
//   ]);
// }

mix.browserSync({
  proxy: 'localhost:8020/user',
  files: [
    'app/**/*.php',
    'resources/views/**/*.php',
    'public/js/**/*.js',
    'public/css/**/*.css',
  ]
});
