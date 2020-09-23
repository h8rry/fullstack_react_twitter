import React from 'react';
import '../styles.scss';

const Login = () => (
    <React.Fragment>
        <div className="border_about">
<h1 className="text-center">LOGIN</h1>
        <form>
  <div className="form-group">
    <label for="exampleInput">Username / E-mail adress</label>
    <input type="email" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Enter username or email"></input>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <div className="form-check">
    <p>Forgot password?</p>
  </div>
  <button type="submit" class="btn btn-primary">Login</button>
</form>

        </div>
    </React.Fragment>
  )

export default Login;