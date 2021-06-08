import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import educationImg from '../../images/educationImg.jpg';
import sustainabilityImg from '../../images/sustainabilityImg.jpg'
import politicalActionImg from '../../images/politicalActionImg.jpg';
import actionBanner from '../../images/actionBanner.jpg';

export default class ActionDashboard extends Component {
  render() {
    return (
      <div className="actionContainer">
        <div className="actionBannerContainer">
          <h1 className="actionBannerText">Action</h1>
          <img 
            className="actionBanner"
            src={actionBanner} 
            alt="leaves" 
          />
        </div>
        <div className="cardsContainer">
          <div className="card">               
              <Link 
                  href=""
                  to={`/education`}
              >
                <div className="cardBody">
                  <img 
                  className="cardImg"
                  src={educationImg}
                  alt="Windmills"
                />
                  <h2>Education</h2>
                  <p className="cardText">Educating yourself on the topics surrounding climate change and environmentalism is a great first step in making a positive change.</p>
                </div>
              </Link>
          </div>
          <div className="card">               
              <Link 
                  href=""
                  to={`/sustainability`}
              >
                <div className="cardBody">
                  <img 
                  className="cardImg"
                  src={sustainabilityImg}
                  alt="Windmills"
                />
                  <h2>Sustainability</h2>
                  <p className="cardText">Making sustainable lifestyle choices helps in lowering your personal carbon footprint. </p>
                </div>
              </Link>
          </div>
          <div className="card">               
              <Link 
                  href=""
                  to={`/politicalAction`}
              >
                <div className="cardBody">
                  <img 
                  className="cardImg"
                  src={politicalActionImg}
                  alt="Windmills"
                />
                  <h2>Political Action</h2>
                  <p className="cardText">Political action is the most important avenue for mitigating further environmental degradation. </p>
                </div>
              </Link>
          </div>
        </div>
      </div>
    )
  }
}