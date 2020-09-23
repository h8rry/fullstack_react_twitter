import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import About from './components/about'
import Login from './components/login'
import Signup from './components/signup'

const Home = () => (
  <Layout>
    <About />
    <Login />
    <Signup />
  </Layout>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})