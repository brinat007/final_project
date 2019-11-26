import React, { Component } from 'react';

import './RegistrationForm.css';

class RegistrationForm extends Component {   
  constructor (props) {
      super(props);
      this.state = {
      };
      this.handleSubmit = this.handleSubmit.bind(this);
  } 

  handleSubmit(event) {
      event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <input
            type = "text"
            placeholder = "E-mail"  
            className = "authField"
          />
          <input
            type = "text"
            placeholder = "Password"  
            className = "authField"
          />
          <button className = "submitBtn">Log in</button>
      </form>
    );
  }
}

export default RegistrationForm;