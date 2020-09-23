import React from 'react';

const Layout = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <a href="/"><span className="navbar-brand mb-0 h1">LOGO</span></a>
        <div className="collapse navbar-collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <span>Language: English</span>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        {props.children}
      </div>
      <footer className="p-3 bg-light">
        <div>
          <span className="mr-3 text-secondary">Built by Joanna Kochanowska 2020</span>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Layout;