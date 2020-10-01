import React from 'react';
import '../styles.scss';
import { safeCredentials, handleErrors } from '../utils/fetchHelper';


class Login extends React.Component {

  state = {
    username: '',
    password: '',
    error: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  login = (e) => {
    if (e) { e.preventDefault(); }
    this.setState({
      error: '',
    });

    fetch('../views/api/sessions', safeCredentials({
      method: 'POST',
      body: JSON.stringify({
        user: {
          username: this.state.username,
          password: this.state.password,
        }
      })
    }))

      .then(handleErrors)
      .then(data => {
        if (data.success) {
          console.log("logged in")
          const params = new URLSearchParams(window.location.search);
          const redirect_url = params.get('redirect_url') || '/';
          window.location = redirect_url;
        }
      })

      .catch(error => {
        this.setState({
          error: 'Could not log in.',
        })
        console.log("not logged in")
      })
  }


  render () {
    const { username, password, error } = this.state;

    return (
      
    /*
    <React.Fragment>
        <div className="border_about">
<h1 className="text-center">LOGIN</h1>

   <form onSubmit={this.login}>
  <div className="form-group">
    <label for="exampleInput">Username</label>
    <input 
    name="username"
    type="text" 
    className="form-control" 
    id="exampleInput" 
    aria-describedby="emailHelp" 
    placeholder="Enter your username"
    value={username} 
    onChange={this.handleChange} />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input 
    name="password"
    type="password" 
    class="form-control" 
    id="exampleInputPassword1" 
    placeholder="Password"
    value={password} 
    onChange={this.handleChange}
    />
   
  </div>
  <div className="form-check">
    <p>Forgot password?</p>
  </div>
  <button type="submit" class="btn btn-primary">Login</button>
  {error && <p className="text-danger mt-2">{error}</p>}
</form>
        </div>
    </React.Fragment>
    */

   <React.Fragment>

   <form onSubmit={this.login}>
     <input name="username" type="text" className="form-control form-control-lg mb-3" placeholder="Email" value={username} onChange={this.handleChange} required />
     <input name="password" type="password" className="form-control form-control-lg mb-3" placeholder="Password" value={password} onChange={this.handleChange} required />
     <button type="submit" className="btn btn-danger btn-block btn-lg">Log in</button>
     {error && <p className="text-danger mt-2">{error}</p>}
   </form>

   <hr/>

   <p className="mb-0">Don't have an account? <a className="text-primary" onClick={this.props.toggle}>Sign up</a></p>

 </React.Fragment>

  )
  }
}

export default Login;