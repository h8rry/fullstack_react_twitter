import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';

class Logout extends React.Component {

render () {
  return (
  <Layout>
    <h1>Logout page</h1>
  </Layout>
  )
}
}
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Logout />,
    document.body.appendChild(document.createElement('div')),
  )
})