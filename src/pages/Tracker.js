import React, { Component } from 'react';
import { AuthProvider } from '../auth/Auth';
import Login from '../auth/Login';
import TrackerDashboard from '../components/trackerComponents/TrackerDashboard';
import '../styles/Tracker.css';



export default class Tracker extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="trackerContainer">
          <Login />
          <TrackerDashboard />
        </div>
      </AuthProvider>
    )
  }
}