import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import Stats from './components/stats'
import Post from './components/posts'

class Feedpage extends React.Component {

  render () {

    return (
  <Layout>
      <div className="container">
          <div className="row">
              <div className="col-3">
    <Stats/>
              </div>
              <div className="col-9">
    <Post/>
              </div>
    </div>
    </div>
  </Layout>
)
    }
  }

export default Feedpage;

