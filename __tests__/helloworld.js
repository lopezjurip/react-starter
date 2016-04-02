'use strict'

jest.unmock('../src/components/helloworld')

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'

import HelloWorld from '../src/components/helloworld'


describe('HelloWorld', () => {

  it('renders subtitle', () => {
    const page = TestUtils.renderIntoDocument(
      <HelloWorld subtitle="subtitle"/>
    )

    // Get all 'HelloWorld' components
    const components = TestUtils.scryRenderedComponentsWithType(page, HelloWorld)
    expect(components.length).toBe(1)
  })

})
