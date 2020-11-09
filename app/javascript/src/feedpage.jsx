import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import Stats from './components/stats'
import Post from './components/posts'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { safeCredentials, handleErrors } from './utils/fetchHelper';

class Feedpage extends React.Component {

constructor() {
  super()
  /*state = {
    feeds: [],
  }*/
  this.handleClick = this.handleClick.bind(this)
  this.handleClick2 = this.handleClick2.bind(this)
}

handleClick() {
  fetch('/api/logout')
  .then(handleErrors)
  .then(function(data) {
  console.log(data);
  window.location = "/" 
})
}

handleClick2() {
  window.location = "/myfeeds"
}


componentDidMount () {
  fetch('/api/tweets')
  .then(handleErrors)
  .then(function(data) {
  console.log(data);
})

}

  render () {

    return (
  <Layout>
      <div className="container">
          <div className="row">
              <div className="col-3">
    <Stats/>
              </div>
              <div className="col-9">
    <button className="btn btn-danger float-right buttons" id="log-out" href="#" onClick={this.handleClick}>Log Out</button>
    <button className="btn btn-secondary float-right buttons" onClick={this.handleClick2}>See only my feeds</button>
    <Post/>
              </div>
    </div>
    </div>
  </Layout>
)
    }
  }


/*
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Demo />,
    document.body.appendChild(document.createElement('div')),
  )
})
*/
export default Feedpage;

