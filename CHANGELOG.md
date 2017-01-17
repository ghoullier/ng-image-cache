# CHANGELOG

---

## 0.4.0 (2017-01-17)

BREAKING CHANGES

- Update directive inputs

Before:

```
<ui-image data-src="http://localhost/images/test.png" data-title="Test"></ui-image>
```

After:

```
<ui-image ui-src="'http://localhost/images/test.png'" ui-title="'Test'"></ui-image>
<ui-image ui-src="$ctrl.src" ui-title="$ctrl.title"></ui-image>
```

## 0.3.0 (2015-06-02)

- Register has a bower component

## 0.2.0 (2015-03-04)

- Allow setCacheStrategy
- Add Changelog

## 0.1.0
