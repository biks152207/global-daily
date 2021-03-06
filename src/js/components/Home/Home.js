import React from 'react';
import Frame from 'react-frame-component';

export default class  Home extends React.Component{
  render(){

    return(
      <Frame  style={{"height" : "600px", "width": "100%"}} initialContent={this.props.initialContent} >
      <div id="wrapper">
      <div id="content">
        <div className="ads-content draft">
          <div className="wrapper-content">
            <div className="title-info">
              <p className="title-h1">MATCH ME IN A H2H - BUILD A SALARY CAP LINEUP</p>
              <p className="date">Contest Closes July 25 7:05pm ET<b>14:15:37</b></p>
            </div>
            <div className="some-text">
              <img src="../images/ball.svg" alt="ball"/>
              <div className="wrap-text">
                <p className="match-preview">Football - English Premier League - 5 Games - Starts 12:00pm</p>
                <p className="properties-match">
                  <span>My Entries: <b>10 ($10,500)</b></span>
                  <span>Match Me Vs: <b>Similar Skill</b></span>
                  <span>Opponent Limit: <b>No Limit</b></span>
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
                    <img src="../images/sun.png" alt="sun"/>
                    <p>11:00am</p>
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
                      <li className="active"><span>All</span></li>
                      <li><span>F</span></li>
                      <li><span>M</span></li>
                      <li><span>D</span></li>
                      <li><span>U</span></li>
                      <li><span>K</span></li>
                    </ul>
                  </div>
                  <div className="tab-content">
                      <div role="tabpanel" className="tab-pane active" >
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
                    <input type="text" placeholder="Enter a name for your new lineup. (Optional)"/>
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
                    <div className="athlete-table">
                      <table className="table table-lobby">

                          <tbody>
                            <tr>
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
                            <td className="sal">$126<b>SALARY</b></td>
                            <td><i className="fa fa-times-circle-o" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
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
                            <td className="sal">$126<b>SALARY</b></td>
                            <td><i className="fa fa-times-circle-o" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
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
                            <td className="sal">$126<b>SALARY</b></td>
                            <td><i className="fa fa-times-circle-o" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
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
                            <td className="sal">$126<b>SALARY</b></td>
                            <td><i className="fa fa-times-circle-o" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
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
                            <td className="sal">$126<b>SALARY</b></td>
                            <td><i className="fa fa-times-circle-o" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
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
                            <td className="sal">$126<b>SALARY</b></td>
                            <td><i className="fa fa-times-circle-o" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
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
                            <td className="sal">$126<b>SALARY</b></td>
                            <td><i className="fa fa-times-circle-o" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
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
                            <td className="sal">$126<b>SALARY</b></td>
                            <td><i className="fa fa-times-circle-o" aria-hidden="true"></i></td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                    <a href="#" className="green-button mt">MATCH ME IN H2H CONTESTS <span>$10,500 ENTRY FEES</span></a>
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
Home.defaultProps = {
  initialContent:'<!DOCTYPE html><html><head><link rel="stylesheet"  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/> <link rel="stylesheet"  href="styles/styles.css"/></head><body><div></div></body></html>'
}
