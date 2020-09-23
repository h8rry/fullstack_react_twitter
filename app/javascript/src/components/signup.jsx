import React from 'react';
import '../styles.scss';

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