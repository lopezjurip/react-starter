import React, { Component } from 'react'

import HelloWorld from './components/helloworld'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      data: [],
    };
    this.all = this.all.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.all();
  }

  all() {
    return fetch('http://localhost:3001/messages')
      .then(result => result.json())
      .then(result => this.setState({ data: result.messages }))
  }

  handleSubmit(e) {
    // Prevent page refresh
    e.preventDefault();

    const request = {
      method: 'POST',
      body: JSON.stringify({ message: this.state.value }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    };

    return fetch('http://localhost:3001/messages', request)
      .then(this.all)
      .then(() => this.setState({ value: '' }))
  }

  render() {
    return (
      <div>
        <h1>App</h1>
        <form onSubmit={this.handleSubmit}>

          {this.state.data.map((d, i) => (
            <p key={i}>{d}</p>
          ))}

          <input
            type="text"
            value={this.state.value}
            onChange={(e) => this.setState({ value: e.target.value })}
          />

        </form>
      </div>
    );
  }
}
