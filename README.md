# Angular image cache module

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
