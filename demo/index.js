import { Widget } from '../src'

const { on$ } = Widget

class ButtonCore extends Widget {
  @on$('click', '.btn')
  onClick () {
    console.log('clicked!')
  }

  render () {
    return <button class='btn'>{this.children}</button>
  }
}

class ButtonImpl extends Widget {
  render () {
    return <ButtonCore>{this.children}</ButtonCore>
  }
}

class Button extends Widget {
  render () {
    return <ButtonImpl>{this.data.text}</ButtonImpl>
  }
}

class App extends Widget {
  get defaultData () {
    return {
      n: 1
    }
  }

  render () {
    return <div class='app-wrap'>
      {
        (n => {
          const arr = []
          for (let i = 0; i < n; ++i) {
            arr.push(<Button text={i} />)
          }
          return arr
        })(this.data.n)
      }
    </div>
  }
}

const app = new App({
  shareMode: true
})

app.mount('#app')

setTimeout(_ => {
  app.update({
    n: 10
  })
}, 3000)

setTimeout(_ => {
  app.update({
    n: 5
  })
}, 6000)

const app2 = new App({
  shareMode: true
})

app2.mount('#app')

setTimeout(_ => {
  app2.update({
    n: 10000
  })
}, 3000)

setTimeout(_ => {
  app2.update({
    n: 5000
  })
}, 6000)
