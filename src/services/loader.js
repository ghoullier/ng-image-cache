'use strict';

/**
 * @ngInject()
 */
function ImageLoaderFactory($q) {
  return {
    load: load
  };

  function load(uri) {
    return $q(function async(resolve, reject) {
      var image = new Image();
      image.crossOrigin = 'anonymous';
      image.src = uri;
      image.addEventListener('load', onLoad);
      image.addEventListener('error', onError);
      function onLoad(event) {
        resolve(image, event);
      }
      function onError(error) {
        reject(error);
      }
    });
  }
}

module.exports = ImageLoaderFactory;
