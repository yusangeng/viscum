/* global describe it */

import chai from 'chai'
import selectorToElement from '../../src/utils/selectorToElement'

chai.should()

describe('selectorToElement', _ => {
  describe('#selectorToElement', _ => {
    it('should output element when input string', done => {
      selectorToElement('body').nodeType.should.be.eq(1)
      done()
    })

    it('should output element when input element', done => {
      selectorToElement(document.body).nodeType.should.be.eq(1)
      done()
    })
  })
})
