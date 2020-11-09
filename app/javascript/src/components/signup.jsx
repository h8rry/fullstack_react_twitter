import React from 'react';
import '../styles.scss';
import ReactDOM from 'react-dom';
import { safeCredentials, handleErrors } from '../utils/fetchHelper';
import { Element } from 'react-scroll'
import Scroll from 'react-scroll';
let Link = Scroll.Link;

class Signup extends React.Component {
  state = {
    email: '',
    password: '',
    username: '',
    error: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  signup = (e) => {
    if (e) { e.preventDefault(); }
    this.setState({
      error: '',
    });

    fetch('/api/users', safeCredentials({
      method: 'POST',
      body: JSON.stringify({
        user: {
          email: this.state.email,
          password: this.state.password,
          username: this.state.username,
        }
      })
    }))
      .then(handleErrors)
      .catch(error => {
        this.setState({
          error: 'Could not sign up.',
        })
        console.log("Could not sign up")
      })
  }

  render () {
    const { email, password, username, error } = this.state;
    return (
      <React.Fragment>

<div className="border_signup">

        <form onSubmit={this.signup}>

          <h3><Element id='signup-destination' name='signup-destination'>SIGNUP</Element></h3>
          <input name="username" type="text" className="form-control form-control-lg mb-3" placeholder="Username" value={username} onChange={this.handleChange} required />
          <input name="email" type="text" className="form-control form-control-lg mb-3" placeholder="Email" value={email} onChange={this.handleChange} required />
          <input name="password" type="password" className="form-control form-control-lg mb-3" placeholder="Password" value={password} onChange={this.handleChange} required />
          <button type="submit" className="btn btn-danger btn-block btn-lg">Sign up</button>
        </form>
        <hr/>
        <p className="mb-0">Already have an account? <a className="text-primary"><Link to="login-destination">Log in</Link></a></p>
        </div>   

      </React.Fragment>
    )
  }
}

export default Signup


/*
const Signup = () => (
    <React.Fragment>
        <div className="border_about">
<h1 className="text-center">SIGNUP</h1>
        <form>
  <div className="form-group">
    <label for="exampleInput">Username</label>
    <input type="email" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Enter username"></input>
  </div>
  <div className="form-group">
    <label for="exampleInput">E-mail adress</label>
    <input type="email" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Enter email"></input>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <button type="submit" class="btn btn-primary">Signup</button>
</form>
        </div>
    </React.Fragment>
  )

export default Signup;
*/