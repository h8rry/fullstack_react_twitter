import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import Stats from './components/stats'
import NewPost from './components/new_post'
import ExamplePost from './components/example_post'

const Demo = () => (
  <Layout>
      <div className="container">
          <div className="row">
              <div className="col-2">
    <Stats/>
              </div>
              <div className="col-10">
    <NewPost/>
    <ExamplePost/>
    <ExamplePost/>
    <ExamplePost/>
              </div>
    </div>
    </div>
  </Layout>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Demo />,
    document.body.appendChild(document.createElement('div')),
  )
})