import { Widget } from '../src'

class Button extends Widget {
  render () {
    return <button>{this.data.text}</button>
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
            arr.push(<Button text={this.data.text} />)
          }
          return arr
        })(this.data.n)
      }
    </div>
  }
}

const n = 10000
const app = window.demo = new App({
  data: { n, text: '1234' }
})

function t (fn) {
  setTimeout(_ => {
    const time = Date.now()
    fn()
    console.log('用时: ' + (Date.now() - time))
  }, 1000)
}

t(_ => app.mount('#app'))

t(_ => {
  window.updating = 1
  app.update({ text: '5678' })
})
