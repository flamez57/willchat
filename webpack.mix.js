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
  }
});

mix.options({
  extractVueStyles: true,
  // processCssUrls: true,
  // uglify: {},
  // purifyCss: false,
  // postCss: [require('autoprefixer')],
  // clearConsole: false
});

mix.js('resources/assets/js/user/index.js', 'public/js/user.js').extract(['vue', 'vue-router', 'vuex', 'axios', 'vue-axios', 'element-ui']);

mix.browserSync({
  proxy: 'localhost:8020/user',
  files: [
    'app/**/*.php',
    'resources/views/**/*.php',
    'public/js/**/*.js',
    'public/css/**/*.css',
  ]
});
