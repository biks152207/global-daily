import React, { Component } from 'react';
import Frame from 'react-frame-component';

export default class DraftRoomScPs extends Component{
  render(){
    return(
      <Frame  style={{"height" : "600px", "width": "100%"}} initialContent={this.props.initialContent} >
      <div id="content">
        <div className="ads-content draft">
          <div className="wrapper-content">
            <div className="title-info">
              <p className="title-h1">BUILD A SALARY CAP LINEUP</p>
              <p className="date">Contest Closes July 25 7:05pm ET<b>14:15:37</b></p>
            </div>
            <div className="some-text">
              <img src="../images/ball.svg" alt="ball" className="top-ball"/>
              <div className="wrap-text">
                <p className="match-preview">$10 MILLION Football EPL Cup Finals<i className="fa fa-info-circle" aria-hidden="true"></i></p>
                <div className="prop-m">
                  <span className="sal">Salary Cap</span>
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
            <div className="match-list">
              <ul>
                <li>
                  <input type="checkbox" className="checkbox-match all" id="match" />
                    <label for="match">Show all</label>
                    <p className="number">(8 GAMES)</p>
                </li>
                <li className="active">
                  <input type="checkbox" checked className="checkbox-match" id="match-1" />
                    <label for="match-1">Sui</label>
                    <input type="checkbox" checked className="checkbox-match" id="match-2" />
                    <label for="match-2">Pol</label>
                    <img src="../images/sun.png" alt="sun"/>
                    <p>11:00am</p>
                </li>
                <li>
                  <input type="checkbox" className="checkbox-match" id="match-3" />
                    <label for="match-3">Wal</label>
                    <input type="checkbox" className="checkbox-match" id="match-4" />
                    <label for="match-4">Nir</label>
                    <img src="../images/sun.png" alt="sun"/>
                    <p>1:00am</p>
                </li>
                <li>
                  <input type="checkbox" className="checkbox-match" id="match-5" />
                    <label for="match-5">Wal</label>
                    <input type="checkbox" className="checkbox-match" id="match-6" />
                    <label for="match-6">Nir</label>
                    <img src="../images/sun.png" alt="sun"/>
                    <p>1:00am</p>
                </li>
                <li>
                  <input type="checkbox" className="checkbox-match" id="match-7" />
                    <label for="match-7">Wal</label>
                    <input type="checkbox" className="checkbox-match" id="match-8" />
                    <label for="match-8">Nir</label>
                    <img src="../images/sun.png" alt="sun"/>
                    <p>1:00am</p>
                </li>
                <li>
                  <input type="checkbox" className="checkbox-match" id="match-9" />
                    <label for="match-9">Wal</label>
                    <input type="checkbox" className="checkbox-match" id="match-10" />
                    <label for="match-10">Nir</label>
                    <img src="../images/sun.png" alt="sun"/>
                    <p>1:00am</p>
                </li>
                <li className="active">
                  <input type="checkbox" checked className="checkbox-match" id="match-11" />
                    <label for="match-11">Sui</label>
                    <input type="checkbox" checked className="checkbox-match" id="match-12" />
                    <label for="match-12">Pol</label>
                    <img src="../images/sun.png" alt="sun"/>
                    <p>11:00am</p>
                </li>
                <li>
                  <input type="checkbox" className="checkbox-match" id="match-13" />
                    <label for="match-13">Wal</label>
                    <input type="checkbox" className="checkbox-match" id="match-14" />
                    <label for="match-14">Nir</label>
                    <img src="../images/sun.png" alt="sun"/>
                    <p>1:00am</p>
                </li>
                <li>
                  <input type="checkbox" className="checkbox-match" id="match-15" />
                    <label for="match-15">Wal</label>
                    <input type="checkbox" className="checkbox-match" id="match-16" />
                    <label for="match-16">Nir</label>
                    <img src="../images/sun.png" alt="sun"/>
                    <p>1:00am</p>
                </li>
              </ul>
            </div>
            <div className="available-athlete row">
              <div className="available col-md-7">
                <div className="block-title">
                  <p className="available-title">Available Athlete Pool</p>
                  <a href="#">Download player pool (CSV)</a>
                </div>
                <div className="available-list">
                  <div className="block-switch">
                    <div className="search-athlete">
                      <input type="search" className="ath" placeholder="Athlete Search"/>
                      <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                    </div>
                    <div className="check-advance">
                      <input type="checkbox" className="checkbox-ath" id="ath" />
                        <label for="ath">AUTO ADVANCE</label>
                    </div>
                    <ul className="list-switch">
                      <li className="active"><span data-id="1">All</span></li>
                      <li><span data-id="2">F</span></li>
                      <li><span data-id="3">M</span></li>
                      <li><span data-id="4">D</span></li>
                      <li><span data-id="5">U</span></li>
                      <li><span data-id="6">K</span></li>
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
                    <p className="salary">Salary: <span>$1,000</span></p>
                    <p className="avg">Avg / Athlete:<span>$125</span></p>
                  </div>
                  <div className="athlete-list">
                    <div className="list-info">
                      <p className="lock-time">THIS LINEUP LOCKS AT JUL 25 - 7:05PM ET</p>
                      <p className="clear ">CLEAR ALL<i className="fa fa-times" aria-hidden="true"></i></p>
                    </div>
                    <div className="athlete-table sel sc-ps">
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
                            <td className="entities in">23.3<b>FPPG</b></td>
                            <td className="sal">$126<b>SALARY</b></td>
                            <td><i className="fa fa-times-circle-o" aria-hidden="true"></i></td>
                            </tr>
                            <tr className="add">
                              <td className="numb">F</td>
                              <td>ADD AN ATHLETE</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            </tr>
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
                            <td className="entities in">23.3<b>FPPG</b></td>
                            <td className="sal">$126<b>SALARY</b></td>
                            <td><i className="fa fa-times-circle-o" aria-hidden="true"></i></td>
                            </tr>
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
                            <td className="entities in">23.3<b>FPPG</b></td>
                            <td className="sal">$126<b>SALARY</b></td>
                            <td><i className="fa fa-times-circle-o" aria-hidden="true"></i></td>
                            </tr>
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
                            <td className="entities in">23.3<b>FPPG</b></td>
                            <td className="sal">$126<b>SALARY</b></td>
                            <td><i className="fa fa-times-circle-o" aria-hidden="true"></i></td>
                            </tr>
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
                            <td className="entities in">23.3<b>FPPG</b></td>
                            <td className="sal">$126<b>SALARY</b></td>
                            <td><i className="fa fa-times-circle-o" aria-hidden="true"></i></td>
                            </tr>
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
                            <td className="entities in">23.3<b>FPPG</b></td>
                            <td className="sal">$126<b>SALARY</b></td>
                            <td><i className="fa fa-times-circle-o" aria-hidden="true"></i></td>
                            </tr>
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
                            <td className="entities in">23.3<b>FPPG</b></td>
                            <td className="sal">$126<b>SALARY</b></td>
                            <td><i className="fa fa-times-circle-o" aria-hidden="true"></i></td>
                            </tr>
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
                            <td className="entities in">23.3<b>FPPG</b></td>
                            <td className="sal">$126<b>SALARY</b></td>
                            <td><i className="fa fa-times-circle-o" aria-hidden="true"></i></td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                    <div className="button-block">
                      <button className="blue-button entry">RESERVE A SPOT<img src="../images/warning.png"/></button>
                      <button className="green-button entry active">ENTER THIS LINEUP<span>$10,500 ENTRY FEES</span></button>
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
DraftRoomScPs.defaultProps = {
  initialContent:'<!DOCTYPE html><html><head><link rel="stylesheet"  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/> <link rel="stylesheet"  href="styles/styles.css"/></head><body><div></div></body></html>'
}
