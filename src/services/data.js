'use strict';

var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');

/**
 * @ngInject()
 */
function ImageDataFactory($q, ImageLoader) {
  return {
    get: get
  };

  function get(uri) {
    return $q(function async(resolve, reject) {
      ImageLoader
        .load(uri)
        .then(function onLoadImage(image) {
          // Update canvas dimensions
          canvas.height = image.height;
          canvas.width = image.width;
          // Draw image
          context.drawImage(image, 0, 0);
          // Get data url
          resolve(getDataUrl());
        }, reject)
      ;
    });
  }

  function getDataUrl() {
    var data = null;
    try {
      data = canvas.toDataURL('image/png');
    } catch (e) {
      // Security exception
    }
    return data;
  }
}

module.exports = ImageDataFactory;
