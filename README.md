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

class App extends Widget {
  render () {
    return <div>
      <Button text={this.data.buttonText} />
    </div>
  }
}

const app = new App({
  data: {
    buttonText: 'Foo'
  }
})

app.mount('#app')

setTimeout(_ => {
  app.update({
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
