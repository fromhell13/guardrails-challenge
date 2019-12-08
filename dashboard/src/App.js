import React, { Component } from 'react';
import './App.css';

//import components
import Home from './Components/home.component'
import Details from './Components/detail.component'
import Form from './Components/form.component'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            <Link to="/" className="navbar-brand">Guardrails Scan Result</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Add New</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route exact path="/" component={Home} />
          <Route strict path="/show/:resultId" component={Details} />
          <Route path="/create" component={Form} />
        </div>
      </Router>
    );
  }
}

export default App;
