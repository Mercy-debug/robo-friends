import React from 'react';
import './Login.css';


class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      message: ""
    }
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value })
  }
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value })
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    if(this.state.name === 'john' & 
      this.state.password === '1234') {
        this.setState({ message: "Successful!"})
        this.props.swtichPage();
        return;
      }
    this.setState({ message: 'Unsuccessful' })
  }

  render() {
    return (
      <div className='login-form'>
        <h1>{ this.state.message }</h1>
        <form onSubmit={ this.onFormSubmit }>
          <input 
            type='text' 
            placeholder='name' 
            onChange={this.onNameChange }/>
          <input 
            type='password' 
            placeholder='password' 
            onChange={this.onPasswordChange}/>
          <button type='submit'>Login</button>
        </form>
      </div>
    )
  }
}

export default Login;