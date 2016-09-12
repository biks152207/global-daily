import React from 'react';


export default class LobbyFootball extends React.Component{
  render(){
    return(
      <div>
      <div className="filter-content">
        <div className="filter-wrapper">
          <div className="league-filter">
            <p className="title-filters">League <i className="fa fa-info-circle"></i></p>
            <ul className="filter-tabs">
              <li className="active"><a href="#"> <img src="../images/england.png" alt=""/>EPL<span>5 Slates</span></a></li>
              <li><a href="#"> <img src="../images/italy.png" alt=""/>Serie A<span>5 Slates</span></a></li>
              <li><a href="#"> <img src="../images/germany.png" alt=""/>Bundesliga<span>5 Slates</span></a></li>
              <li><a href="#"> <img src="../images/spain.png" alt=""/>La Liga<span>5 Slates</span></a></li>
              <li><a href="#"> <img src="../images/france.png" alt=""/>Ligue 1<span>5 Slates</span></a></li>
              <li><a href="#"> <img src="../images/germany.png" alt=""/>Bundesliga<span>5 Slates</span></a></li>
              <li><a href="#" ><img src="../images/germany.png" alt=""/>Bundesliga<span>5 Slates</span></a></li>
              <li><a href="#"><img src="../images/germany.png" alt=""/>Bundesliga<span>5 Slates</span></a></li>
              <li><a href="#"><img src="../images/germany.png" alt=""/>Bundesliga<span>5 Slates</span></a></li>
            </ul>
          </div>
          <div className="game-filter">
            <p className="title-filters">Game slates: Epl<i className="fa fa-info-circle"></i></p>
            <ul className="filter-tabs">
              <li className="active"><a href="#">10 Games<span>12pm - 12/16</span></a></li>
              <li><a href="#">10 Games<span>12pm - 12/16</span></a></li>
              <li><a href="#">10 Games<span>12pm - 12/16</span></a></li>
              <li><a href="#">10 Games<span>12pm - 12/16</span></a></li>
              <li><a href="#">10 Games<span>12pm - 12/16</span></a></li>
              <li><a href="#">10 Games<span>12pm - 12/16</span></a></li>
              <li><a href="#">10 Games<span>12pm - 12/16</span></a></li>
              <li><a href="#">10 Games<span>12pm - 12/16</span></a></li>
              <li><a href="#">10 Games<span>12pm - 12/16</span></a></li>
            </ul>
          </div>
          <div className="other-filters">
            <div className="filter-fee">
              <p className="title-filters">Fee ($0 - $10500) <i className="fa fa-info-circle"></i></p>
              <div className="range-fee">
                <div id="slider-range"></div>
              </div>
            </div>
            <div className="filter-type">
              <p className="title-filters">Contest type <i className="fa fa-info-circle"></i></p>
              <ul className="filter-tabs">
                <li className="active"><a href="#">ALL</a></li>
                <li><a href="#">Salary Cap<span>Be a manager</span></a></li>
                <li><a href="#">Pro Pick'em<span>Quick and easy</span></a></li>
              </ul>
            </div>
            <div className="filter-size">
              <p className="title-filters">Size <i className="fa fa-info-circle"></i></p>
              <ul className="filter-tabs">
                <li className="active"><a href="#" ><span>3+</span></a></li>
                <li><a href="#">h2h</a></li>
              </ul>
            </div>
            <div className="filter-modifiers">
              <p className="title-filters">Contest modifiers <i className="fa fa-info-circle"></i></p>
              <ul className="filter-tabs">
                <li>
                  <input type="checkbox" className="checkbox" id="checkbox" />
                  <label for="checkbox">GPPs</label></li>
                <li>
                  <input type="checkbox" className="checkbox" id="checkbox1" />
                  <label for="checkbox1">Single entry</label>
                </li>
                <li>
                  <input type="checkbox" className="checkbox" id="checkbox2" />
                  <label for="checkbox2">50/50 and Multipliers</label>
                </li>
                <li>
                  <input type="checkbox" className="checkbox" id="checkbox3" />
                  <label for="checkbox3">Qualifiers & Satellites</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-content">
        <div role="tabpanel" className="tab-pane active" id="home">
          <table className="table table-lobby">
            <thead>
              <tr>
                <th></th>
                <th>Contest name</th>
                <th>Fee</th>
                <th>Prizes <i className="fa fa-caret-down"></i></th>
                <th>ENTRIES <i className="fa fa-info-circle"></i></th>
                <th>Starts (et)</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><i className="fa fa-futbol-o"></i></td>
                <td>
                  <p><strong>$10 MILLION</strong> Football EPL Cup Finals</p>
                <a href="">Salary Cap</a> <a href="">GPP</a> <a href="">Multi Entry(100)</a>
              </td>
              <td>$10,500</td>
              <td>$10,000,000</td>
              <td className="entities in">519856/100K <i className="fa fa-check-circle"></i></td>
              <td>07/24 12:00pm</td>
              <td><button className="btn btn-success">Enter</button></td>
              </tr>
              <tr>
                <td><i className="fa fa-futbol-o"></i></td>
                <td>
                  <p><strong>$10 MILLION</strong> Football EPL Cup Finals</p>
                <a href="">Salary Cap</a> <a href="">GPP</a> <a href="">Multi Entry(100)</a>
              </td>
              <td>$10,500</td>
              <td>$10,000,000</td>
              <td className="entities in">519856/100K <i className="fa fa-check-circle"></i></td>
              <td>07/24 12:00pm</td>
              <td><button className="btn btn-success active">Enter</button></td>
              </tr>
              <tr>
                <td><i className="fa fa-futbol-o"></i></td>
                <td>
                  <p><strong>$10 MILLION</strong> Football EPL Cup Finals</p>
                <a href="">Salary Cap</a> <a href="">GPP</a> <a href="">Multi Entry(100)</a>
              </td>
              <td>$10,500</td>
              <td>$10,000,000</td>
              <td className="entities">519856/100K <i className="fa fa-check-circle"></i></td>
              <td>07/24 12:00pm</td>
              <td><button className="btn btn-success">Enter</button></td>
              </tr>
              <tr>
                <td><i className="fa fa-futbol-o"></i></td>
                <td>
                  <p><strong>$10 MILLION</strong> Football EPL Cup Finals</p>
                <a href="">Salary Cap</a> <a href="">GPP</a> <a href="">Multi Entry(100)</a>
              </td>
              <td>$10,500</td>
              <td>$10,000,000</td>
              <td className="entities in">519856/100K <i className="fa fa-check-circle"></i></td>
              <td>07/24 12:00pm</td>
              <td><button className="btn btn-success">Add Entry</button></td>
              </tr>
              <tr>
                <td><i className="fa fa-futbol-o"></i></td>
                <td>
                  <p><strong>$10 MILLION</strong> Football EPL Cup Finals</p>
                <a href="">Salary Cap</a> <a href="">GPP</a> <a href="">Multi Entry(100)</a>
              </td>
              <td>$10,500</td>
              <td>$10,000,000</td>
              <td className="entities">519856/100K <i className="fa fa-check-circle"></i></td>
              <td>07/24 12:00pm</td>
              <td><button className="btn btn-success">Max Entries</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div role="tabpanel" className="tab-pane" id="profile">...</div>
        <div role="tabpanel" className="tab-pane" id="messages">...</div>
        <div role="tabpanel" className="tab-pane" id="settings">...</div>
      </div>
      </div>
    )
  }
}
