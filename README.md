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
<ui-image ui-src="'http://localhost/images/test.png'" ui-title="'Test'"></ui-image>
```

Image is loaded using javascript, content is stored in DOMStorage (sessionStorage or localStorage) for next loading

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
