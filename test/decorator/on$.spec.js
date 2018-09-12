/* global describe it */

import 'babel-polyfill'
import chai from 'chai'
import on$ from '../../src/decorator/on$'

chai.should()

class Target {
  @on$('foo', '.abc')
  foo() {
  }

  @on$('bar')
  bar () {
  }
}

describe('on$', _ => {
  describe('#on$', _ => {
    it('should have right __decorated_listeners__', done => {
      const dl = Target.prototype.__decorated_listeners__
      
      dl.length.should.be.equal(1)
      const el = dl[0]
      el.type.should.be.equal('foo')
      el.sel.should.be.equal('.abc')
      el.callback.should.be.equal(Target.prototype.foo)

      done()
    })

    it('should have right __decorated_widget_listeners__', done => {
      const dl = Target.prototype.__decorated_widget_listeners__
      
      dl.length.should.be.equal(1)
      const el = dl[0]
      el.type.should.be.equal('bar')
      el.callback.should.be.equal(Target.prototype.bar)

      done()
    })
  })
})