import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import About from './components/about'
import Login from './components/login'
import Signup from './components/signup'
import { safeCredentials, handleErrors } from './utils/fetchHelper';

class Home extends React.Component {

  state = {
    authenticated: false,
    show_login: true,
  }

  componentDidMount() {
    fetch('../views/api/sessions/authenticated.jbuilder')
      .then(handleErrors)
      .then(data => {
        this.setState({
          authenticated: data.authenticated,
        })
      })
  }

  toggle = () => {
    this.setState({
      show_login: !this.state.show_login,
    })
  }

  render () {
    const { authenticated} = this.state;
    if (authenticated) {
      return (
        <Layout>
        <About />
        <p>YOU ARE LOGGED IN!</p>
        <Login />
        <Signup />
      </Layout>
      );
    };
    return (
      <Layout>
      <About />
      <p>NOT LOGGED IN!</p>
      <Login />
      <Signup />
    </Layout>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})