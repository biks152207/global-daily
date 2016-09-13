import React, { Component } from 'react';
import Frame from 'react-frame-component';

export default class DraftRoomPp extends Component{
  render(){
    return(
      <Frame  style={{"height" : "600px", "width": "100%"}} initialContent={this.props.initialContent} >
      <div id="content" className="pp">
        <div className="ads-content draft">
          <div className="wrapper-content">
            <div className="title-info">
              <p className="title-h1">BUILD A SALARY CAP LINEUP</p>
              <p className="date">Contest Closes July 25 7:05pm ET<b>14:15:37</b></p>
            </div>
            <div className="some-text">
              <img src="../images/ball.svg" alt="ball" className="top-ball"/>
              <div className="wrap-text">
                <p className="match-preview">$10 MILLION Football EPL Cup Finals <i className="fa fa-info-circle" aria-hidden="true"></i></p>
                <div className="prop-m">
                  <span className="sal">Pro Pick'em</span>
                      <i className="fa fa-circle" aria-hidden="true"></i>
                    <span className="gpp">GPP</span>
                      <i className="fa fa-circle" aria-hidden="true"></i>
                    <span className="m-entry">Multi Entry (100)</span>
                  </div>
                <p className="properties-match">
                  <span className="entries">My Entries: <b>00</b></span>
                  <span className="entrants">Entrants: <b>234000 / 300K</b></span>
                  <span className="prize">Prize Pool: <b>$10,000,000</b></span>
                  <span className="entry-fee">Entry Fee: <b>$10,500</b></span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="draft-match">
          <div className="wrapper-content">
            <div className="match-list not-check">
              <ul>
                <li>
                  <p className="country">Wal</p>
                  <p className="country">Nir</p>
                    <img src="../images/sun.png" alt="sun"/>
                    <p>1:00pm - 08/14</p>
                </li>
                <li>
                  <p className="country">Wal</p>
                  <p className="country">Nir</p>
                    <img src="../images/sun.png" alt="sun"/>
                    <p>1:00pm - 08/14</p>
                </li>
                <li>
                  <p className="country">Wal</p>
                  <p className="country">Nir</p>
                    <img src="../images/sun.png" alt="sun"/>
                    <p>1:00pm - 08/14</p>
                </li>
                <li>
                  <p className="country">Wal</p>
                  <p className="country">Nir</p>
                    <img src="../images/sun.png" alt="sun"/>
                    <p>1:00pm - 08/14</p>
                </li>
                <li>
                  <p className="country">Wal</p>
                  <p className="country">Nir</p>
                    <img src="../images/sun.png" alt="sun"/>
                    <p>1:00pm - 08/14</p>
                </li>
                <li>
                  <p className="country">Wal</p>
                  <p className="country">Nir</p>
                    <img src="../images/sun.png" alt="sun"/>
                    <p>1:00pm - 08/14</p>
                </li>
                <li>
                  <p className="country">Wal</p>
                  <p className="country">Nir</p>
                    <img src="../images/sun.png" alt="sun"/>
                    <p>1:00pm - 08/14</p>
                </li>
                <li>
                  <p className="country">Wal</p>
                  <p className="country">Nir</p>
                    <img src="../images/sun.png" alt="sun"/>
                    <p>1:00pm - 08/14</p>
                </li>
                <li>
                  <p className="country">Wal</p>
                  <p className="country">Nir</p>
                    <img src="../images/sun.png" alt="sun"/>
                    <p>1:00pm - 08/14</p>
                </li>
              </ul>
            </div>
            <div className="available-athlete row">
              <div className="available col-md-7">
                <div className="block-title">
                  <p className="available-title">Select an Athlete from Each Group</p>
                  <a href="#">Download player pool (CSV)</a>
                </div>
                <div className="available-list">
                  <div className="block-switch-group">
                    <div className="check-advance">
                      <input type="checkbox" className="checkbox-ath" id="ath" />
                        <label for="ath">AUTO ADVANCE</label>
                    </div>
                    <ul className="list-switch">
                      <li className="active"><span data-id="1">Group 1</span></li>
                      <li><span data-id="2">Group 2</span></li>
                      <li><span data-id="3">Group 3</span></li>
                      <li><span data-id="4">Group 4</span></li>
                      <li><span data-id="5">Group 5</span></li>
                      <li><span data-id="6">Group 6</span></li>
                      <li><span data-id="7">Group 7</span></li>
                      <li><span data-id="8">Group 8</span></li>
                      <li><span data-id="9">Group 9</span></li>
                    </ul>
                  </div>
                  <div className="tab-content">
                      <div role="tabpanel" className="tab-pane active" id="tab-pane-1" >
                        <table className="table table-lobby">
                          <thead>
                            <tr>
                              <th>POS</th>
                              <th>ATHLETE NAME</th>
                              <th>OPPONENT</th>
                              <th></th>
                              <th>FPPG</th>
                              <th className="sol">SALARY</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>F</td>
                              <td>
                              <a href="#" className="player">Harry Kane</a>
                            </td>
                            <td>ENG @ ISL</td>
                            <td><img src="../images/sun.png" alt="sun"/></td>
                            <td className="entities in">23.5</td>
                            <td>$126</td>
                            <td><i className="fa fa-plus-circle" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                              <td>F</td>
                              <td>
                              <a href="#" className="player">Harry Kane</a>
                            </td>
                            <td>ENG @ ISL</td>
                            <td><img src="../images/sun.png" alt="sun"/></td>
                            <td className="entities in">23.5</td>
                            <td>$126</td>
                            <td><i className="fa fa-plus-circle" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                              <td>F</td>
                              <td>
                              <a href="#" className="player">Harry Kane</a>
                            </td>
                            <td>ENG @ ISL</td>
                            <td><img src="../images/sun.png" alt="sun"/></td>
                            <td className="entities in">23.5</td>
                            <td>$126</td>
                            <td><i className="fa fa-plus-circle" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                              <td>F</td>
                              <td>
                              <a href="#" className="player">Harry Kane</a>
                            </td>
                            <td>ENG @ ISL</td>
                            <td><img src="../images/sun.png" alt="sun"/></td>
                            <td className="entities in">23.5</td>
                            <td>$126</td>
                            <td><i className="fa fa-plus-circle" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                              <td>F</td>
                              <td>
                              <a href="#" className="player">Harry Kane</a>
                            </td>
                            <td>ENG @ ISL</td>
                            <td><img src="../images/sun.png" alt="sun"/></td>
                            <td className="entities in">23.5</td>
                            <td>$126</td>
                            <td><i className="fa fa-plus-circle" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                              <td>F</td>
                              <td>
                              <a href="#" className="player">Harry Kane</a>
                            </td>
                            <td>ENG @ ISL</td>
                            <td><img src="../images/sun.png" alt="sun"/></td>
                            <td className="entities in">23.5</td>
                            <td>$126</td>
                            <td><i className="fa fa-plus-circle" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                              <td>F</td>
                              <td>
                              <a href="#" className="player">Harry Kane</a>
                            </td>
                            <td>ENG @ ISL</td>
                            <td><img src="../images/sun.png" alt="sun"/></td>
                            <td className="entities in">23.5</td>
                            <td>$126</td>
                            <td><i className="fa fa-plus-circle" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                              <td>F</td>
                              <td>
                              <a href="#" className="player">Harry Kane</a>
                            </td>
                            <td>ENG @ ISL</td>
                            <td><img src="../images/sun.png" alt="sun"/></td>
                            <td className="entities in">23.5</td>
                            <td>$126</td>
                            <td><i className="fa fa-plus-circle" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                              <td>F</td>
                              <td>
                              <a href="#" className="player">Harry Kane</a>
                            </td>
                            <td>ENG @ ISL</td>
                            <td><img src="../images/sun.png" alt="sun"/></td>
                            <td className="entities in">23.5</td>
                            <td>$126</td>
                            <td><i className="fa fa-plus-circle" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                              <td>F</td>
                              <td>
                              <a href="#" className="player">Harry Kane</a>
                            </td>
                            <td>ENG @ ISL</td>
                            <td><img src="../images/sun.png" alt="sun"/></td>
                            <td className="entities in">23.5</td>
                            <td>$126</td>
                            <td><i className="fa fa-plus-circle" aria-hidden="true"></i></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div role="tabpanel" className="tab-pane" id="profile">...</div>
                      <div role="tabpanel" className="tab-pane" id="messages">...</div>
                      <div role="tabpanel" className="tab-pane" id="settings">...</div>
                    </div>
                </div>
                </div>
                <div className="athlete col-md-5">
                  <div className="block-title">
                    <p className="available-title">New Lineup:</p>
                    <input type="text" placeholder="Enter a name for your new lineup. (Optional) "/>
                  </div>
                  <div className="athlete-info">
                    <a href="#" className="button-blue">USE EXISTING LINEUP</a>
                    <p className="ath-sel">Athletes Selected:<span>1 / 9</span></p>
                  </div>
                  <div className="athlete-list">
                    <div className="list-info">
                      <p className="lock-time">THIS LINEUP LOCKS AT JUL 25 - 7:05PM ET</p>
                      <p className="clear ">CLEAR ALL<i className="fa fa-times" aria-hidden="true"></i></p>
                    </div>
                    <div className="athlete-table sel">
                      <table className="table table-lobby">

                          <tbody>
                            <tr className="active">
                              <td><img src="../images/player.jpg"/></td>
                              <td>
                                <div className="top-line">
                                <span className="pos">F</span>
                                <a href="#" className="player">Harry Kane</a>
                              </div>
                              <div className="bottom-line">
                                <span className="leag"><b>ENG</b> @ ISL</span>
                                <span className="tm">4:00pm ET 02/26</span>
                              </div>
                            </td>
                            <td className="entities in">23.5<b>FPPG</b></td>
                            <td><i className="fa fa-times-circle-o" aria-hidden="true"></i></td>
                            </tr>
                            <tr className="add">
                              <td className="numb">2</td>
                              <td>ADD AN ATHLETE TO GROUP 2</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr className="add">
                              <td className="numb">3</td>
                              <td>ADD AN ATHLETE TO GROUP 3</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr className="add">
                              <td className="numb">4</td>
                              <td>ADD AN ATHLETE TO GROUP 4</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr className="add">
                              <td className="numb">5</td>
                              <td>ADD AN ATHLETE TO GROUP 5</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr className="add">
                              <td className="numb">6</td>
                              <td>ADD AN ATHLETE TO GROUP 6</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr className="add">
                              <td className="numb">7</td>
                              <td>ADD AN ATHLETE TO GROUP 7</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr className="add">
                              <td className="numb">8</td>
                              <td>ADD AN ATHLETE TO GROUP 8</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr className="add">
                              <td className="numb">9</td>
                              <td>ADD AN ATHLETE TO GROUP 9</td>
                            <td></td>
                            <td></td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                    <div className="button-block">
                      <button className="blue-button entry">RESERVE A SPOT<img src="../images/warning.png"/></button>
                      <button className="green-button entry">ENTER THIS LINEUP<span>$10,500 ENTRY FEES</span></button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Frame>
    )
  }
}
DraftRoomPp.defaultProps = {
  initialContent:'<!DOCTYPE html><html><head><link rel="stylesheet"  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/> <link rel="stylesheet"  href="styles/styles.css"/></head><body><div></div></body></html>'
}
