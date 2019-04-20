import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  handleClick = () => this.setState({ counter: this.state.counter + 1 });

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default Counter;