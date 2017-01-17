'use strict';

angular
  .module('demo', [
    'ngImageCache'
  ])

  .config(['ImageCacheProvider', function (ImageCacheProvider) {
    ImageCacheProvider.setStorage(window.localStorage);
  }])

  .controller('WrapperController', [function () {
    // Use CORS Proxy to avoid security issue
    this.src = 'https://crossorigin.me/http://angularjs.org/img/AngularJS-large.png'
    // Title
    this.title = 'Angular JS Title'
  }])
;
