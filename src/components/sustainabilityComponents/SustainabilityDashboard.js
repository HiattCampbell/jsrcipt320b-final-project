import React, { Component } from 'react';
import sustainabilityBanner from '../../images/sustainabilityBanner.jpg';
import wasteImg from '../../images/wasteImg.jpg';
import energyImg from '../../images/energyImg.jpg';
import consumptionImg from '../../images/consumptionImg.jpg';
import dietImg from '../../images/dietImg.jpg';

export default class SustainabilityDashboard extends Component {
  render() {
    return (
      <div className="sustainabilityContainer">
        <div className="sustainabilityBannerContainer">
          <h1 className="sustainabilityBannerText">Sustainability</h1>
          <img 
            className="sustainabilityBanner"
            src={sustainabilityBanner} 
            alt="leaves" 
          />
        </div>
        <div className="sustainabilityInfo"> 
          <div className="sustainabilityTopic">
            <img className="sustainabilityImg" src={wasteImg} alt="waste" />
            <div className="sustainabilityText">
              <h3>Waste</h3>
              <p>Reducing waste conserves space in landfills, sustains resources, and saves energy. Because the plastics in landfills take up to four hundred years to decompose, the harmful water and air pollution these sites create will ensue long after we are gone. Many resources we use are nonrenewable and we are likely to deplete them if we continue using them at the rate we are currently. However, there are some ways you can start taking accountability for your own waste. Some simple ways to reduce your waste and the negative effects it has on the planet include recycling, composting, buying items with less packaging, using reusable bags, cups, and containers, and decreasing your plastic consumption.</p>
            </div>
          </div>
          <div className="sustainabilityTopic">
            <div className="sustainabilityText">
              <h3>Energy</h3>
              <p>Saving energy significantly reduces greenhouse gas emissions and conserves natural resources. You can reduce the energy you consume in and outside of your home by turning off lights you aren’t using, unplugging electronics, being mindful of your water usage, washing your clothes on a cold setting, setting your air conditioner to a higher temperature setting, driving less or using public transport, and switching to LED light bulbs. </p>
            </div>
            <img className="sustainabilityImg" src={energyImg} alt="energy" />
          </div>
          <div className="sustainabilityTopic">
            <img className="sustainabilityImg" src={consumptionImg} alt="consumption" />
            <div className="sustainabilityText">
              <h3>Consumption</h3>
              <p>Consumption and production are directly responsible for the current climate crisis. The production and transportation of household goods significantly contributes to greenhouse gas emissions. To decrease your consumption make conscious purchases, shop second hand when you’re able to, buy items that will last a long time, and fix your broken items. </p>
            </div>
          </div>
          <div className="sustainabilityTopic">
            <div className="sustainabilityText">
              <h3>Diet</h3>
              <p>Reducing meat and dairy consumption will drastically reduce your carbon footprint. Raising livestock, alone, accounts for nearly fifteen percent of yearly greenhouse gas emissions. Ruminants, or animals who digest their food using fermentation, are mostly responsible for the high emissions associated with livestock farming. The resources used to maintain livestock, including the land, food, and water, put further strain on the environment. Substituting plant-based food for animal products a few times a week greatly reduces your individual carbon footprint and, on a collective level, would reduce demand for animal agriculture. </p>
            </div>
            <img className="sustainabilityImg" src={dietImg} alt="diet" />
          </div>
        </div>
      </div>
    )
  }
}
