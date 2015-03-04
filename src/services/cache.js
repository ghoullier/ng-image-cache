'use strict';

/**
 * @ngInject()
 */
function ImageCacheProvider() {
  // Default storage strategy
  var storage = window.sessionStorage;

  return {
    $get: $get,
    setStorage: setStorage
  };

  /**
   * @ngInject()
   */
  function $get($q, ImageData) {
    return {
      get: get
    };

    function get(uri) {
      return $q(function async(resolve) {
        if (cached(uri)) {
          resolve(storage[uri]);
        } else {
          ImageData.get(uri).then(function onGetData(data) {
            storage[uri] = data;
            resolve(data);
          }, function onError() {
            storage[uri] = uri;
            resolve(uri);
          });
        }
      });
    }
  }

  function setStorage(newStorage) {
    storage = newStorage;
  }

  function cached(key) {
    return key in storage;
  }
}

module.exports = ImageCacheProvider;
