import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import Stats from './components/stats'
import NewPost from './components/new_post'
import Post from './components/posts'
import ExamplePost from './components/example_post'

import { safeCredentials, handleErrors } from './utils/fetchHelper';

class Feedpage extends React.Component {

constructor() {
  super()
  /*state = {
    feeds: [],
  }*/
  this.handleClick = this.handleClick.bind(this)
}

handleClick() {
  fetch('/api/logout')
  .then(handleErrors)
  .then(function(data) {
  console.log(data);
  window.location = "/logout"
})
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
    <button id="log-out" href="#" onClick={this.handleClick}>Log Out</button>

      <div className="container">
          <div className="row">
              <div className="col-2">
    <Stats/>
              </div>
              <div className="col-10">
                {/*
    <NewPost/>
    <ExamplePost/>
    <ExamplePost/>
    <ExamplePost/>
                */}
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

