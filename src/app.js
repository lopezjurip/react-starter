import React, { Component } from 'react'

import HelloWorld from './components/helloworld'


export default class App extends Component {
  render() {
    return (
      <HelloWorld subtitle="Hey! i'm a prop"/>
    )
  }
}
