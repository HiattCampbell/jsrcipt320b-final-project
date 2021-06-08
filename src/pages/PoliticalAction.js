import React, { Component } from 'react';
import PoliticalActionDashboard from '../components/politicalActionComponents/PoliticalActionDashboard';
import '../styles/PoliticalAction.css'

export default class PoliticalAction extends Component {
  render() {
    return (
      <div>
        <PoliticalActionDashboard />
      </div>
    )
  }
}