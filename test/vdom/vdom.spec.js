/* global describe it */

import chai from 'chai'
import vdom from '../../src/vdom/vdom'
import Widget from '../../src'

function olog (o) {
  console.log(JSON.stringify(o, null, 2))
}

chai.should()

describe('vdom', _ => {
  describe('#simple vdom', _ => {
    it('vids should be right', done => {
      const vd = vdom(<div>
        <button></button>  
      </div>)

      const vid = vd.vid
      vd.children[0].vid.should.be.eq(vid + '.1')
      done()
    })
  })

  describe('#vdom with sub widget', _ => {
    class Button extends Widget {
      render () {
        return <button>btn</button>
      }
    }

    class App extends Widget {
      render () {
        return <div>
          <Button __widget='btn' />  
        </div>
      }
    }

    const app = new App()
    const vd = vdom(app.render(), app)

    it('vid should be right', done => {
      //olog(vd)

      const rootVID = vd.vid

      vd.children[0].vid.should.be.eq(`${rootVID}.1$`)
      vd.children[0].children[0].vid.should.be.eq(`${rootVID}.1$.1`)
      done()
    })

    it('root widget should have right sub widget instance', done => {
      Object.keys(app.subWidgets_).length.should.be.eq(1)

      app.$('btn').vid.should.be.eq('1.1$')
      app.$('btn').constructor.should.be.eq(Button)

      done()
    })
  })

  describe('#vdom with sub widget in childran vdom', _ => {
    class Button extends Widget {
      render () {
        return <button>btn</button>
      }
    }

    class Wrap extends Widget {
      render () {
        return <div>{this.children}</div>
      }
    }

    class App extends Widget {
      render () {
        return <div>
          <Wrap __widget='wrap'>
            <Button __widget='btn'/>
          </Wrap>
        </div>
      }
    }

    const app = new App()
    const vd = vdom(app.render(), app)

    it('vid should be right', done => {
      olog(vd)

      const rootVID = vd.vid

      vd.children[0].vid.should.be.eq(`${rootVID}.1$`)
      vd.children[0].children[0].vid.should.be.eq(`${rootVID}.1.1$`)
      done()
    })

    it('root widget should have right sub widget instance', done => {
      Object.keys(app.subWidgets_).length.should.be.eq(2)
      
      app.$('wrap').vid.should.be.eq(`${vd.vid}.1$`)
      app.$('wrap').constructor.should.be.eq(Wrap)
      app.$('btn').vid.should.be.eq(`${vd.vid}.1.1$`)
      app.$('btn').constructor.should.be.eq(Button)

      done()
    })
  })
})
