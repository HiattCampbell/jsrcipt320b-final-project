import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom'; 
import '../../styles/Nav.css';

export default class Nav extends Component {
  render() {
    return (
      <HashRouter>
      <div className="container">
        <nav 
          className="navbar navbar-expand-md navbar-dark bg-dark fixed-top"
        >
          <h3 className="logo">The Green Guide</h3>
          <Link 
            className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"
            href=""
            to={`/`}
          >
           <h6>Home</h6>
          </Link>
          <Link 
            className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"
            href=""
            to={`/action`}
          >
           <h6>Action</h6>
          </Link>
          <Link 
            className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"
            href=""
            to={`/tracker`}
          >
           <h6>Login</h6>
          </Link>
        </nav>
      </div>
      </HashRouter>
    )
  }
}
