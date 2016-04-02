import React, { Component, StyleSheet } from 'react'


export default class HelloWorld extends Component {

  constructor(props) {
    super(props)
    this.state = {
      on: true,
    }
  }

  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>
        <h1>Hello, world.</h1>
        <h2 style={styles.detail}>
          Subtitle: {this.props.subtitle}
        </h2>
        <p>
          State: {this.state.on ? 'on' : 'off'} (click on me)
        </p>
      </div>
    )
  }

  handleClick() {
    this.setState({ on: !this.state.on })
  }
}

const styles = {
  detail: {
    color: 'red',
  },
}
