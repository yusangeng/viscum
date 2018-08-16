import { Widget } from '../src'

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

