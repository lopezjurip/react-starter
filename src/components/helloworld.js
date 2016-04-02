import React, { Component, StyleSheet } from 'react'


export default class HelloWorld extends Component {
  render() {
    return (
      <div>
        <h1>Hello, world.</h1>
        <h2 style={styles.detail}>Subtitle: {this.props.subtitle}</h2>
      </div>
    )
  }
}

const styles = {
  detail: {
    color: 'red',
  },
}
