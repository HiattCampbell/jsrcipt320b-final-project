import React, { Component } from 'react';
import RepresentativeList from './RepresentativeList';
import politicalActionBanner from '../../images/politicalActionBanner.jpg';

export default class PoliticalActionDashboard extends Component {
  
  render() {
    return (
      <div className="politicalActionContainer">
        <div className="politicalActionBannerContainer">
          <h1 className="politicalActionBannerText">Political Action</h1>
          <img 
            className="politicalActionBanner"
            src={politicalActionBanner} 
            alt="leaves" 
          />
        </div>
        <div className="politicalActionBody">
          <h1>Find Your Representatives</h1>
          <RepresentativeList />
        </div>
        <div className="scripts"> 
          <div className="script">
            <h2 className="scriptTitle">Email Script</h2>
            <hr/>
            <p className="scriptText">"Dear (Senator/Representative),<br /><br />I’m reaching out to ask that you support a plan to stop the climate crisis that’s actually in line with what the world’s top scientists and United Nations say is necessary. That starts with you supporting Congresswoman Ocasio-Cortez’s special committee to develop a plan for a Green New Deal bill. Please endorse Alexandria Ocasio-Cortez’s Resolution for a Select Committee on a Green New Deal. A Green New Deal can get us off fossil fuels to 100% renewable energy over the next decade in a way that prioritizes the needs of low-income and people of color communities who have been on the frontlines of climate impacts. It can put people back to work earning a family-wage. It's a bold, progressive solution at the scale of the crisis we face. Will you support the resolution?<br /><br />Thank you,<br /><br />(your name)"</p>
          </div>
          <div className="script">
            <h2 className="scriptTitle">Phone Script</h2>
            <hr/>
            <p className="scriptText">"Hello, my name is (your name) and I'm calling to voice my support for the Green New Deal introduced by Representative Ocasio-Cortez and Senator Markey. Climate change poses an extreme threat to our nation's economy, security, our coastal cities, and the wellbeing of people all around the world. We need to get serious about sustainability by taking bold steps like those proposed in this resolution. I hope that (Senator/Representative) will add their support to the Green New Deal. Thank you."</p>
          </div>
        </div>
      </div>
    )
  }
}
