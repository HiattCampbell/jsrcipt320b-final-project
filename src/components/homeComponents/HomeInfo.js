import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import banner from '../../images/banner.jpg';

export default class HomeInfo extends Component {
  render() {
    return (
      <div className="homeContainer">
        <div className="homeBannerContainer">
          <h1 className="homeBannerText">Welcome to the Green Guide</h1>
          <img 
            className="homeBanner"
            src={banner} 
            alt="leaves" 
          />
        </div>
        <div className="paragraph">
          <p>Becoming more environmentally conscious is a daunting task for many. Although extreme lifestyle transformations such as going zero waste or cultivating a sustainable farm are incredible goals to strive for, such drastic changes are often unsustainable and not as effective as small practices one can implement into their daily life. Here at the Green Guide, we believe in the power of collective action, no matter how small. Our tools are designed to help you on your journey to living a more sustainable life and advocating for the climate. </p>
        </div>
        <hr />
        <div className="tracker">
          <h1 className="trackerHeader">Start making a change today</h1>
          <div className="trackerLinkContainer">
            <Link 
              className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"
              href=""
              to={`/tracker`}
            >
            <h3 className="trackerLink">Create an account to track your progress</h3>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
