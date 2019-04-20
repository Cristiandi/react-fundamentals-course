import React, { Component } from 'react';

class MyForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }
  
  syncChanges(value, property) {
    let state = {};
    state[property] = value;
    this.setState(state);
  }

  submitForm() {
    console.log('state', this.state);
  }

  render() {
    return (
      <form>
        <input  type='email' value={this.state.email} placeholder='Email'
                onChange={ev => this.syncChanges(ev.target.value, 'email')} />
        <input  type='password' value={this.state.password} placeholder='****'
                onChange={ev => this.syncChanges(ev.target.value, 'password')} />
        <div>
          <input onClick={ () => this.submitForm() } type='submit' value='Login' />
        </div>
      </form>
    );
  }
  
};

export default MyForm;