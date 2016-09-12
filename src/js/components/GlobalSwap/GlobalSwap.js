import React, { Component } from 'react';

export default class GlobalSwap extends Component{
  render(){
    return(
      <div id="content">
        <div className="ads-content draft swap">
          <div className="wrapper-content">
            <div className="title-info">
              <p className="title-h1">GLOBAL ATHLETE SWAP</p>
              <select className="swap-select">
                <option>SALARY CAP - Football - EPL - 5 Games - 12:00pm 08/16</option>
                <option>SALARY CAP - Football - EPL - 5 Games - 12:00pm 08/16</option>
                <option>SALARY CAP - Football - EPL - 5 Games - 12:00pm 08/16</option>
              </select>
              <p className="date">Game Slate July 25 7:05pm ET<b>14:15:37</b></p>
            </div>
            <div className="some-text">
              <p>Use this tool to swap athletes across multiple lineups of the same contest type in one game slate.  </p>
            </div>
          </div>
        </div>
        <div className="draft-match swap">
          <div className="wrapper-content">

            <div className="available-athlete row">
              <div className="available col-md-7">
                <div className="block-title">
                  <p className="available-title">Select an Athlete to Swap Out</p>
                </div>
                <div className="available-list swap">
                  <div className="block-switch">
                    <div className="search-athlete">
                      <input type="search" className="ath" placeholder="Athlete Search"/>
                      <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
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
                  <div className="tab-content swap-out">
                      <div role="tabpanel" className="tab-pane active" id="tab-pane-1" >
                        <table className="table table-lobby">
                          <thead>
                            <tr>
                              <th>POS</th>
                              <th>ATHLETE NAME</th>
                              <th>ENTRIEST</th>
                              <th>FPPG</th>
                              <th className="sol">SALARY</th>
                              <th>EXCESS</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="active">
                              <td>F</td>
                              <td>
                              <a href="#" className="player">Harry Kane</a>
                            </td>
                            <td>100</td>
                            <td className="entities in">23.5</td>
                            <td>$108</td>
                            <td>$126</td>
                            <td><i className="fa fa-chevron-circle-right" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                              <td>F</td>
                              <td>
                              <a href="#" className="player">Harry Kane</a>
                            </td>
                            <td>100</td>
                            <td className="entities in">23.5</td>
                            <td>$108</td>
                            <td>$126</td>
                            <td><i className="fa fa-chevron-circle-right" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                              <td>F</td>
                              <td>
                              <a href="#" className="player">Harry Kane</a>
                            </td>
                            <td>100</td>
                            <td className="entities in">23.5</td>
                            <td>$108</td>
                            <td>$126</td>
                            <td><i className="fa fa-chevron-circle-right" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                              <td>F</td>
                              <td>
                              <a href="#" className="player">Harry Kane</a>
                            </td>
                            <td>100</td>
                            <td className="entities in">23.5</td>
                            <td>$108</td>
                            <td>$126</td>
                            <td><i className="fa fa-chevron-circle-right" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                              <td>F</td>
                              <td>
                              <a href="#" className="player">Harry Kane</a>
                            </td>
                            <td>100</td>
                            <td className="entities in">23.5</td>
                            <td>$108</td>
                            <td>$126</td>
                            <td><i className="fa fa-chevron-circle-right" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                              <td>F</td>
                              <td>
                              <a href="#" className="player">Harry Kane</a>
                            </td>
                            <td>100</td>
                            <td className="entities in">23.5</td>
                            <td>$108</td>
                            <td>$126</td>
                            <td><i className="fa fa-chevron-circle-right" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                              <td>F</td>
                              <td>
                              <a href="#" className="player">Harry Kane</a>
                            </td>
                            <td>100</td>
                            <td className="entities in">23.5</td>
                            <td>$108</td>
                            <td>$126</td>
                            <td><i className="fa fa-chevron-circle-right" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                              <td>F</td>
                              <td>
                              <a href="#" className="player">Harry Kane</a>
                            </td>
                            <td>100</td>
                            <td className="entities in">23.5</td>
                            <td>$108</td>
                            <td>$126</td>
                            <td><i className="fa fa-chevron-circle-right" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                              <td>F</td>
                              <td>
                              <a href="#" className="player">Harry Kane</a>
                            </td>
                            <td>100</td>
                            <td className="entities in">23.5</td>
                            <td>$108</td>
                            <td>$126</td>
                            <td><i className="fa fa-chevron-circle-right" aria-hidden="true"></i></td>
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
                    <p className="available-title">Select an Athlete to Swap In</p>
                  </div>
                  <div className="athlete-info">
                    <p className="salary">Salary Available: <span>$234 <strong>($108 + $126)</strong></span></p>
                    <div className="search-athlete">
                      <input type="search" className="ath" placeholder="Athlete Search"/>
                      <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                    </div>
                  </div>
                  <div className="athlete-list">
                    <div className="athlete-table swap">
                      <table className="table table-lobby">
                          <thead>
                            <tr>
                              <th>POS</th>
                              <th>ATHLETE NAME</th>
                              <th>OPPONENT</th>
                              <th>FPPG</th>
                              <th className="sol">SALARY</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>F</td>
                              <td><a href="#" className="player">Harry Kane</a></td>
                              <td className="leag">ENG @ ISL</td>
                            <td className="entities in">23.5</td>
                            <td className="sal">$108</td>
                            <td><i className="fa fa-chevron-circle-left" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                              <td>F</td>
                              <td><a href="#" className="player">Harry Kane</a></td>
                              <td className="leag">ENG @ ISL</td>
                            <td className="entities in">23.5</td>
                            <td className="sal">$108</td>
                            <td><i className="fa fa-chevron-circle-left" aria-hidden="true"></i></td>
                            </tr>
                            <tr className="active">
                              <td>F</td>
                              <td><a href="#" className="player">Harry Kane</a></td>
                              <td className="leag">ENG @ ISL</td>
                            <td className="entities in">23.5</td>
                            <td className="sal">$108</td>
                            <td><i className="fa fa-chevron-circle-left" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                              <td>F</td>
                              <td><a href="#" className="player">Harry Kane</a></td>
                              <td className="leag">ENG @ ISL</td>
                            <td className="entities in">23.5</td>
                            <td className="sal">$108</td>
                            <td><i className="fa fa-chevron-circle-left" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                              <td>F</td>
                              <td><a href="#" className="player">Harry Kane</a></td>
                              <td className="leag">ENG @ ISL</td>
                            <td className="entities in">23.5</td>
                            <td className="sal">$108</td>
                            <td><i className="fa fa-chevron-circle-left" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                              <td>F</td>
                              <td><a href="#" className="player">Harry Kane</a></td>
                              <td className="leag">ENG @ ISL</td>
                            <td className="entities in">23.5</td>
                            <td className="sal">$108</td>
                            <td><i className="fa fa-chevron-circle-left" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                              <td>F</td>
                              <td><a href="#" className="player">Harry Kane</a></td>
                              <td className="leag">ENG @ ISL</td>
                            <td className="entities in">23.5</td>
                            <td className="sal">$108</td>
                            <td><i className="fa fa-chevron-circle-left" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                              <td>F</td>
                              <td><a href="#" className="player">Harry Kane</a></td>
                              <td className="leag">ENG @ ISL</td>
                            <td className="entities in">23.5</td>
                            <td className="sal">$108</td>
                            <td><i className="fa fa-chevron-circle-left" aria-hidden="true"></i></td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                    <div className="button-block">
                      <button className="green-button swap">SWAP SELECTED ATHLETES</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
    )
  }
}
