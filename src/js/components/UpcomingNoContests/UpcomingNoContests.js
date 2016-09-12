import React, { Component } from 'react';

export default class UpcomingNoContests extends Component{
  render(){
    return(
      <div id="content">
        <div className="ads-content upcoming no-contests">
          <div className="wrapper-content">
            <div className="title-info">
              <p className="title-h1">UPCOMING</p>
              <div className="select">
                <select className="all-types">
                  <option>All Contest Types</option>
                  <option value="F">F</option>
                    <option value="F">F</option>
                </select>
              </div>

              <div className="select">
                <select className="all-sports">
                  <option>All Sports</option>
                  <option value="Football">Football</option>
                    <option value="Tennis">Tennis</option>
                    <option value="Golf">Golf</option>
                </select>
              </div>

              <div className="select">
                <select className="all-leagues">
                  <option>All Leagues</option>
                  <option value="Epl">Epl</option>
                    <option value="Seria A">Seria A</option>
                    <option value="La Liga">La Liga</option>
                </select>
              </div>

              <div className="select">
                <select className="all-times">
                  <option>All Start Times</option>
                  <option value="4:00pm ET 02/26">4:00pm ET 02/26</option>
                    <option value="8:00pm ET 03/15">8:00pm ET 03/15</option>
                </select>
              </div>

            </div>
            <div className="some-text">
              <p>Edit your lineups, enter new contests with existing lineups, leave contests that have not been filled, and replace lineups in previously entered contests.</p>
            </div>
          </div>
        </div>
        <div className="upcoming-best no-contests">
          <div className="preview-upc">
            <div className="wrapper-content">
              <div className="message-no-contests">
                <p className="fist-message">It looks like you haven't joined any contests or built any lineups yet!</p>
                <p className="second-message">Select one of the following options to get started or take a look at our help section for even more information.</p>
                <div className="block-button no-contests">
                  <button className="blue-button">Take me to the wizard</button>
                  <button className="green-button">Build a lineup</button>
                  <button className="green-button">Go to the lobby</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
