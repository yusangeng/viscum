# Viscum

A micro(7K) data-driven FE framework for simple component.

## Install

``` shell
npm i viscum --save
```
## Usage

js:

``` js
import { Widget } from 'viscum'

const { on$ } = Widget

class Button extends Widget {
  @on$('click', '.btn')
  onClick () {
    alert('foobar')
  }

  render () {
    return <div class='btn-wrap'>
      <button class='btn'>{this.data.text}</button>
    </div>
  }
}

const btn = new Button({
  data: {
    text: 'Foo'
  }
})

btn.mount('#app')

setTimeout(_ => {
  btn.update({
    text: 'Bar'
  })
}, 1000)
```

html:

``` html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Demo</title>
</head>
<body>
  <div id="app"></div>
</body>
</html>
```
