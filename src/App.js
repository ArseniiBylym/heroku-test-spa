import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import Titles from './components/Titles'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        Main app component
        <Router basename="/heroku-test-spa">
          <div>

          <div><Link to='/home' >home</Link></div>
          <div><Link to='/titles' >titles</Link></div>
        <Route path='/home' component={Home} />
        <Route path='/titles' component={Titles} />
      
          </div>
        </Router>
         
        </header>
      </div>
    );
  }
}

export default App;
