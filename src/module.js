'use strict';

module.exports = angular
  .module('ngImageCache', [
    'ng'
  ])

  .provider('ImageCache', require('./services/cache'))

  .factory('ImageData', require('./services/data'))
  .factory('ImageLoader', require('./services/loader'))

  .directive('uiImage', require('./directives/image'))
;
