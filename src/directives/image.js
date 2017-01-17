'use strict';

var DEFAULT_BASE_64_DATA = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

/**
 * @ngInject()
 */
function uiImageDirective($parse, ImageCache) {
  return {
    link: link,
    restrict: 'E',
    replace: true,
    scope: {
      uiSrc: '=',
      uiTitle: '='
    },
    template: '<img title="{{uiTitle}}" />'
  };

  function link(scope, element, attributes) {
    element.attr('src', DEFAULT_BASE_64_DATA);
    ImageCache
      .get(scope.uiSrc)
      .then(function onGetImageData(base64) {
        element.attr('src', base64);
      })
    ;
  }
}

module.exports = uiImageDirective;
