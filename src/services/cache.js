'use strict';

var cache = sessionStorage;

/**
 * @ngInject()
 */
function ImageCacheFactory($q, ImageData) {
  return {
    get: get
  };

  function get(uri) {
    return $q(function async(resolve) {
      if (cached(uri)) {
        resolve(cache[uri]);
      } else {
        ImageData.get(uri).then(function onGetData(data) {
          cache[uri] = data;
          resolve(data);
        }, function onError() {
          cache[uri] = uri;
          resolve(uri);
        });
      }
    });
  }

  function cached(key) {
    return key in cache;
  }
}

module.exports = ImageCacheFactory;
