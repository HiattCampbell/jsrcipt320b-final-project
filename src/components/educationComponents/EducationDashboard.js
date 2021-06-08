import React, { Component } from 'react';
import educationBanner from '../../images/educationBanner.jpg';
import filmsImg from '../../images/filmsImg.jpg';
import booksImg from '../../images/booksImg.jpg';
import articlesImg from '../../images/articlesImg.jpg';
import podcastsImg from '../../images/podcastsImg.jpg';

export default class EducationDashboard extends Component {
  render() {
    return (
      <div className="educationContainer">
        <div className="educationBannerContainer">
          <h1 className="educationBannerText">Educational Resources</h1>
          <img 
            className="educationBanner"
            src={educationBanner} 
            alt="leaves" 
          />
        </div>
        <div className="resources"> 
          <div className="resource">
          <img className="educationImg" src={filmsImg} alt="flood" />
            <div className="educationText">
              <h2>Films and Series</h2>
              <h5><a className="resourceLink" href="https://www.netflix.com/title/80033772">Cowspiracy: The Sustainability Secret</a></h5>
              <h5><a className="resourceLink" href="https://www.netflix.com/title/80168188">Chasing Coral </a></h5>
              <h5><a className="resourceLink" href="https://www.netflix.com/title/80146284 ">Rotten</a></h5>
              <h5><a className="resourceLink" href="https://www.disneyplus.com/movies/before-the-flood/3oY6tZ6FqpMf">Before the Flood </a></h5>
              <h5><a className="resourceLink" href="https://www.hulu.com/movie/i-am-greta-swedish-narration-cf478db7-10e6-4662-91e3-7ad2f9c5f1f0 ">I Am Greta</a></h5>
            </div>
          </div>
          <div className="resource">
            <div className="educationText"> 
              <h2>Books</h2>
                <h5>On Fire: The (Burning) Case for a Green New Deal by Naomi Klein</h5>
                <h5>The Uninhabitable Earth by David Wallace-Wells</h5>
                <h5>Losing Earth A Recent History by Nathaniel Rich</h5>
                <h5>The Sixth Extinction: An Unnatural History by Elizabeth Kolbert</h5>
                <h5>Falter: Has the Human Game Begun to Play Itself Out? by Bill McKibben</h5>
            </div>
            <img className="educationImg" src={booksImg} alt="fire" />
          </div>
          <div className="resource">
          <img className="educationImg" src={articlesImg} alt="pollution" />
            <div className="educationText">
              <h2>Articles</h2>
              <h5><a className="resourceLink" href="https://www.npr.org/2021/05/27/999837654/fearing-their-kids-will-inherit-dead-coral-reefs-scientists-are-urging-bold-acti">Fearing Their Kids Will Inherit Dead Coral Reefs, Scientists Are Urging Bold Action</a></h5>
              <h5><a className="resourceLink" href="https://www.popsci.com/story/environment/carbon-emissions-offsets-buy/">How to buy carbon offsets that actually make a difference</a></h5>
              <h5><a className="resourceLink" href="https://vegconomist.com/environment/study-switch-to-plant-based-diets-is-most-important-way-to-fight-climate-change/">Study: Switch to Plant-Based Diets is “Most Important” Way to Fight Climate Change</a></h5>
              <h5><a className="resourceLink" href="https://www.nationalgeographic.com/environment/article/megadrought-persists-in-western-us-as-another-extremely-dry-year-develops ">Megadrought’ persists in western U.S., as another extremely dry year develops</a></h5>
            </div>
          </div>
          <div className="resource">
            <div className="educationText">
              <h2>Podcasts</h2>
              <h5>TILClimate</h5>
              <h5>How to Save a Planet</h5>
              <h5>The Climate Question</h5>
              <h5>America Adapts</h5>
              <h5>For What It's Earth</h5>
            </div>
            <img className="educationImg" src={podcastsImg} alt="nature" />
          </div>
        </div>
      </div>
    )
  }
}
