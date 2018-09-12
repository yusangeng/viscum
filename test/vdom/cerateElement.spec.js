/* global describe it */

import chai from 'chai'
import createElement from '../../src/vdom/createElement'

chai.should()

describe('createElement', _ => {
  describe('#createElement', _ => {
    it('should be right vdom', done => {
      const vdom = createElement('div', { className: 'xxx' },
        createElement('div', { className: 'yyy' }), createElement('div', { className: 'zzz' }))

      vdom.tag.should.be.eq('DIV')
      vdom.props.className.should.be.eq('xxx')
      vdom.children[0].tag.should.be.eq('DIV')
      vdom.children[1].tag.should.be.eq('DIV')
      vdom.children[0].props.className.should.be.eq('yyy')
      vdom.children[1].props.className.should.be.eq('zzz')

      done()
    })

    it('should be NOSCRIPT', done => {
      const vdom = createElement({}, { className: 'xxx' })

      vdom.tag.should.be.eq('NOSCRIPT')

      done()
    })

    it('should be right widget vdom', done => {
      const fn = _ => _
      const vdom = createElement(fn, { className: 'xxx' })

      vdom.tag.should.be.eq(fn)

      done()
    })
  })
})
