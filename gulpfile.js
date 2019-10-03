global.$ = {
  gulp: require('gulp'),
  gp:   require('gulp-load-plugins')(),
  browserSync: require('browser-sync').create(),
  rollup: require('rollup'),
  imageminJpegRecompress: require('imagemin-jpeg-recompress'),
  pngquant: require('imagemin-pngquant'),
  del: require('del'),
  path: {
    config: require('./gulp/config.js'),
    jquery: './node_modules/jquery/dist/jquery.min.js',
    carousel: './node_modules/owl.carousel/dist/owl.carousel.min.js',
    js: './js/**/*.js',
    css: './css/**/*.css',
    carouselcss: './node_modules/owl.carousel/dist/assets/owl.carousel.css',
    carouselcsstwo: './node_modules/owl.carousel/dist/assets/owl.theme.default.css',
  }
};

$.path.config.forEach(function(path) {
  require(path)();
});