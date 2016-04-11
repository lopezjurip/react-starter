import React, { Component } from 'react';


export default class HelloWorld extends Component {

  static get propTypes() {
    return {
      subtitle: React.PropTypes.string,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      on: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ on: !this.state.on });
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <h1>Hello, world.</h1>
        <h2 style={styles.detail}>
          Subtitle: {this.props.subtitle}
        </h2>
        <p>
          State: {this.state.on ? 'on' : 'off'} (click on me)
        </p>
      </div>
    );
  }
}

const styles = {
  detail: {
    color: 'red',
  },
};
