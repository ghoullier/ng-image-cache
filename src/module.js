'use strict';

angular
  .module('ngImageCache', [
    'ng'
  ])

  .factory('ImageCache', require('./services/cache'))
  .factory('ImageData', require('./services/data'))
  .factory('ImageLoader', require('./services/loader'))

  .directive('uiImage', require('./directives/image'))
;
