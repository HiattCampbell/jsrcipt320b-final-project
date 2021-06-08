import '../../styles/App.css';
import Home from '../../pages/Home';
import Tracker from '../../pages/Tracker';
import Action from '../../pages/Action';
import Education from '../../pages/Education';
import Sustainability from '../../pages/Sustainability';
import PoliticalAction from '../../pages/PoliticalAction';
import Nav from './Nav';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Nav />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/tracker" component={Tracker} /> 
            <Route exact path="/action" component={Action} />
            <Route exact path="/education" component={Education} />
            <Route exact path="/sustainability" component={Sustainability} />
            <Route exact path="/politicalaction" component={PoliticalAction} />
          </Switch>
        </div>
      </div>
    </Router>
    );
  }
}

export default App;
