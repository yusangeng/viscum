/* global describe it */

import chai from 'chai'
import addVID from '../../src/vdom/addVID'

chai.should()

describe('addVID', _ => {
  describe('#addVID', _ => {
    it('should be right vid', done => {
      const vdom = {
        tag: 'DIV',
        props: {},
        children: [
          {
            tag: 'div',
            props: {}
          },
          {
            tag: 'div',
            props: {}
          }
        ]
      }

      addVID(vdom)

      vdom.vid.should.be.eq('1')
      vdom.children[0].vid.should.be.eq('1.1')
      vdom.children[1].vid.should.be.eq('1.2')

      done()
    })

    it('should be input vid', done => {
      const vdom = {
        tag: 'DIV',
        props: {},
        children: [
          {
            tag: 'div',
            props: {}
          },
          {
            tag: 'div',
            props: {}
          }
        ]
      }

      addVID(vdom, '3')

      vdom.vid.should.be.eq('3')
      vdom.children[0].vid.should.be.eq('3.1')
      vdom.children[1].vid.should.be.eq('3.2')

      done()
    })
  })
})
