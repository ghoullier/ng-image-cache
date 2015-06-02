# Angular image cache module

## GETTING STARTED

```js
angular
  .module('demo', [
    'ngImageCache'
  ])
;
```

```html
<ui-image data-src="http://localhost/images/test.png" data-title="Test"></ui-image>
```

Image is loaded using javascript, content is stored in sessionStorage for next loading

## CONFIGURE

Update storage

```js
angular
  .module('demo', [
    'ngImageCache'
  ])
  .config(['ImageCacheProvider', function(ImageCacheProvider) {
    // Use localStorage instead of sessionStorage
    ImageCacheProvider.setStorage(window.localStorage)
  }])
;
```

## [CHANGELOG](CHANGELOG.md)
