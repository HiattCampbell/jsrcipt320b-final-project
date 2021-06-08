import '../../styles/App.css';
import { Route, HashRouter } from 'react-router-dom';
import Home from '../../pages/Home';
import Tracker from '../../pages/Tracker';
import Action from '../../pages/Action';
import Education from '../../pages/Education';
import Sustainability from '../../pages/Sustainability';
import PoliticalAction from '../../pages/PoliticalAction';
import Nav from './Nav';
import React, { Component } from 'react';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container">
          <HashRouter>
            <Route path="/" exact component={Home} /> 
            <Route path="/tracker" component={Tracker} /> 
            <Route path="/action" component={Action} />
            <Route path="/education" component={Education} />
            <Route path="/sustainability" component={Sustainability} />
            <Route path="/politicalaction" component={PoliticalAction} />
          </HashRouter>
        </div>
      </div>
    );
  }
}

export default App;
