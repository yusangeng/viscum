/* global describe it */

import chai from 'chai'
import Eventable from 'litchy/lib/Eventable'
import mix from 'litchy/lib/mix'
import Delegate from '../../src/utils/Delegate'

chai.should()

class Target extends mix(Eventable).with(Delegate) {
  listen () {
    this.on$('click', 'body', this.onClick.bind(this))
  }
}

describe('Delegate', _ => {
  describe('#on$', _ => {
    it('should catch click event', done => {
      const t = new Target()
      let flag = false

      t.initDelegate(document.body)
      t.on$('click', 'body', _ => {
        flag = true
      })

      document.body.dispatchEvent(new Event('click'))

      setTimeout(_ => {
        flag.should.be.true
        done()
      }, 100)
    })
  })
})
