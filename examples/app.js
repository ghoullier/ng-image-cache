'use strict';

angular
  .module('demo', [
    'ngImageCache'
  ])

  .config(['ImageCacheProvider', function (ImageCacheProvider) {
    ImageCacheProvider.setStorage(window.localStorage);
  }])
;
