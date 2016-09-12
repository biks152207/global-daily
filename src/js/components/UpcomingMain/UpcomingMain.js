import React, { Component } from 'react';

export default class UpcomingMain extends Component{
  render(){
    return(
      <div id="content">
        <div className="ads-content upcoming">
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
        <div className="upcoming-best">
          <div className="preview-upc">
            <div className="wrapper-content">
              <div className="info-upc">
                <img src="../images/ball.svg" alt="ball" className="top-ball"/>
                <div className="wrap-text">
                  <p className="match-preview">Football - English Premier League - 5 Games - Starts 12:00pm</p>
                  <div className="summary-info">
                    <p className="contest-type">Contest Type: <span>Salary Cap</span></p>
                    <p className="lineups">Lineups Entered: <span>10</span></p>
                    <p className="contests">Contests Entered: <span>145</span></p>
                    <p className="entries">My Entries: <span>0 ($152,500)</span></p>
                  </div>
                </div>
                <button className="green-button swap-athlete">GLOBAL ATHLETE SWAP<img src="../images/arrow-up-down.png"/></button>
              </div>
            </div>
          </div>
          <div className="best-block upcoming one">
            <div className="wrapper-content">
              <div className="title-upcoming">
                <div className="inf-upc">
                  <p className="title-lineup">The Best Lineup in the World<img src="../images/pen.png"/></p>
                  <div className="summary-info">
                    <p className="contests">Contests Entered: <span>3</span></p>
                    <p className="entries">My Entries: <span>5 ($52,250)</span></p>
                    <p className="excess">Excess Salary: <span>$12</span></p>
                  </div>
                </div>
                <div className="button-block upcoming">
                  <button className="blue-button export-upcoming">EXPORT TO ENTERED CONTESTS</button>
                  <button className="blue-button edit-lineup">Edit lineup</button>
                  <button className="green-button enter-upc">Enter new contests</button>
                </div>
              </div>
              <ul className="players-list">
                <li>
                  <div className="wrap-ls">
                    <div className="ph-pl">
                      <div className="pos-pl">F</div>
                      <img src="../images/player2.jpg"/>
                    </div>
                    <div className="name-pl">
                      <a href="#" className="player">S.Giovinko</a>
                      <img src="../images/board.png"/>
                    </div>
                    <p className="opponent"><b>Tor</b> @ Dc<span>100%</span></p>
                  </div>
                </li>
                <li>
                  <div className="wrap-ls">
                    <div className="ph-pl">
                      <div className="pos-pl">F</div>
                      <img src="../images/player2.jpg"/>
                    </div>
                    <div className="name-pl">
                      <a href="#" className="player">S.Giovinko</a>
                      <img src="../images/board.png"/>
                    </div>
                    <p className="opponent"><b>Tor</b> @ Dc<span>100%</span></p>
                  </div>
                </li>
                <li>
                  <div className="wrap-ls">
                    <div className="ph-pl">
                      <div className="pos-pl">F</div>
                      <img src="../images/player2.jpg"/>
                    </div>
                    <div className="name-pl">
                      <a href="#" className="player">S.Giovinko</a>
                      <img src="../images/board.png"/>
                    </div>
                    <p className="opponent"><b>Tor</b> @ Dc<span>100%</span></p>
                  </div>
                </li>
                <li>
                  <div className="wrap-ls">
                    <div className="ph-pl">
                      <div className="pos-pl">F</div>
                      <img src="../images/player2.jpg"/>
                    </div>
                    <div className="name-pl">
                      <a href="#" className="player">S.Giovinko</a>
                      <img src="../images/board.png"/>
                    </div>
                    <p className="opponent"><b>Tor</b> @ Dc<span>100%</span></p>
                  </div>
                </li>
                <li>
                  <div className="wrap-ls">
                    <div className="ph-pl">
                      <div className="pos-pl">F</div>
                      <img src="../images/player2.jpg"/>
                    </div>
                    <div className="name-pl">
                      <a href="#" className="player">S.Giovinko</a>
                      <img src="../images/board.png"/>
                    </div>
                    <p className="opponent"><b>Tor</b> @ Dc<span>100%</span></p>
                  </div>
                </li>
                <li>
                  <div className="wrap-ls">
                    <div className="ph-pl">
                      <div className="pos-pl">F</div>
                      <img src="../images/player2.jpg"/>
                    </div>
                    <div className="name-pl">
                      <a href="#" className="player">S.Giovinko</a>
                      <img src="../images/board.png"/>
                    </div>
                    <p className="opponent"><b>Tor</b> @ Dc<span>100%</span></p>
                  </div>
                </li>
                <li>
                  <div className="wrap-ls">
                    <div className="ph-pl">
                      <div className="pos-pl">F</div>
                      <img src="../images/player2.jpg"/>
                    </div>
                    <div className="name-pl">
                      <a href="#" className="player">S.Giovinko</a>
                      <img src="../images/board.png"/>
                    </div>
                    <p className="opponent"><b>Tor</b> @ Dc<span>100%</span></p>
                  </div>
                </li>
                <li>
                  <div className="wrap-ls">
                    <div className="ph-pl">
                      <div className="pos-pl">F</div>
                      <img src="../images/player2.jpg"/>
                    </div>
                    <div className="name-pl">
                      <a href="#" className="player">S.Giovinko</a>
                      <img src="../images/board.png"/>
                    </div>
                    <p className="opponent"><b>Tor</b> @ Dc<span>100%</span></p>
                  </div>
                </li>
                <li>
                  <div className="wrap-ls">
                    <div className="ph-pl">
                      <div className="pos-pl">F</div>
                      <img src="../images/player2.jpg"/>
                    </div>
                    <div className="name-pl">
                      <a href="#" className="player">S.Giovinko</a>
                      <img src="../images/board.png"/>
                    </div>
                    <p className="opponent"><b>Tor</b> @ Dc<span>100%</span></p>
                  </div>
                </li>
              </ul>
              <div className="table-upcoming">
                <table data-tb='1_1'>
                  <thead>
                    <tr>
                      <th>CONTEST NAME</th>
                      <th>MY ENTRIES</th>
                      <th>FEE</th>
                      <th>TOTAL PRIZES</th>
                      <th>ENTRIES</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="body-1_1">
                    <tr data-id='1_1'>
                        <td>
                          <i className="fa fa-times-circle-o" aria-hidden="true"></i>
                          <p className="inf-pl">
                            <span className="pr"><strong>$10 MILLION</strong></span>
                              <span className="sport">Football</span>
                              <span className="leag">EPL</span>
                              <span className="view">Cup Finals</span>
                          </p>
                          <a href="#">Salary Cap</a>
                            <i className="fa fa-circle" aria-hidden="true"></i>
                          <a href="#">GPP</a>
                            <i className="fa fa-circle" aria-hidden="true"></i>
                          <a href="#">Multi Entry (100)</a>
                        </td>
                        <td>2</td>
                      <td>$10,500</td>
                      <td>$10,000,000</td>
                      <td>218956 / 300K</td>
                      <td className="show-e">SHOW ENTRIES<i className="fa fa-sort-desc" aria-hidden="true"></i></td>
                      <td className="hide-e">HIDE ENTRIES<i className="fa fa-caret-up" aria-hidden="true"></i></td>
                      <tr className="all-enteries row-id-1_1">
                          <td>
                            <i className="fa fa-times-circle-o" aria-hidden="true"></i>
                            <p className="inf-pl">
                              <span className="pr"><strong>$10 MILLION</strong></span>
                              <span className="sport">Football</span>
                              <span className="leag">EPL</span>
                              <span className="view">Cup Finals</span>
                            </p>
                            <a href="#">Entry ID #1</a>
                          </td>
                          <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="edit"><button className="blue-button edit-entr">EDIT ENTRY</button></td>
                      </tr>
                      <tr className="all-enteries row-id-1_1">
                          <td>
                            <i className="fa fa-times-circle-o" aria-hidden="true"></i>
                            <p className="inf-pl">
                              <span className="pr"><strong>$10 MILLION</strong></span>
                              <span className="sport">Football</span>
                              <span className="leag">EPL</span>
                              <span className="view">Cup Finals</span>
                            </p>
                            <a href="#">Entry ID #1</a>
                          </td>
                          <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="edit"><button className="blue-button edit-entr">EDIT ENTRY</button></td>
                      </tr>
                    </tr>
                    <tr data-id='1_2'>
                        <td>
                          <i className="fa fa-times-circle-o" aria-hidden="true"></i>
                          <p className="inf-pl">
                            <span className="pr"><strong>$10 MILLION</strong></span>
                            <span className="sport">Football</span>
                            <span className="leag">EPL</span>
                            <span className="view">Cup Finals</span>
                          </p>
                          <a href="#">Salary Cap</a>
                            <i className="fa fa-circle" aria-hidden="true"></i>
                          <a href="#">GPP</a>
                            <i className="fa fa-circle" aria-hidden="true"></i>
                          <a href="#">Multi Entry (100)</a>
                        </td>
                        <td>2</td>
                      <td>$10,500</td>
                      <td>$10,000,000</td>
                      <td>218956 / 300K</td>
                      <td className="show-e">SHOW ENTRIES<i className="fa fa-sort-desc" aria-hidden="true"></i></td>
                      <td className="hide-e">HIDE ENTRIES<i className="fa fa-caret-up" aria-hidden="true"></i></td>
                    </tr>
                  </tbody>
                </table>
                <div className="show-hide-enteries"><p className="show-table">Show entries<i className="fa fa-sort-desc" aria-hidden="true"></i></p><p className="hide-table">Hide entries<i className="fa fa-caret-up" aria-hidden="true"></i></p></div>
              </div>
            </div>
          </div>
          <div className="best-block upcoming two">
            <div className="wrapper-content">
              <div className="title-upcoming">
                <div className="inf-upc">
                  <p className="title-lineup">The 2nd Best Lineup in the World<img src="../images/pen.png"/></p>
                  <div className="summary-info">
                    <p className="contests">Contests Entered: <span>3</span></p>
                    <p className="entries">My Entries: <span>5 ($52,250)</span></p>
                    <p className="excess">Excess Salary: <span>$12</span></p>
                  </div>
                </div>
                <div className="button-block upcoming">
                  <button className="blue-button export-upcoming">EXPORT TO ENTERED CONTESTS</button>
                  <button className="blue-button edit-lineup">Edit lineup</button>
                  <button className="green-button enter-upc">Enter new contests</button>
                </div>
              </div>
              <ul className="players-list">
                <li>
                  <div className="wrap-ls">
                    <div className="ph-pl">
                      <div className="pos-pl">F</div>
                      <img src="../images/player2.jpg"/>
                    </div>
                    <div className="name-pl">
                      <a href="#" className="player">S.Giovinko</a>
                      <img src="../images/board.png"/>
                    </div>
                    <p className="opponent"><b>Tor</b> @ Dc<span>100%</span></p>
                  </div>
                </li>
                <li>
                  <div className="wrap-ls">
                    <div className="ph-pl">
                      <div className="pos-pl">F</div>
                      <img src="../images/player2.jpg"/>
                    </div>
                    <div className="name-pl">
                      <a href="#" className="player">S.Giovinko</a>
                      <img src="../images/board.png"/>
                    </div>
                    <p className="opponent"><b>Tor</b> @ Dc<span>100%</span></p>
                  </div>
                </li>
                <li>
                  <div className="wrap-ls">
                    <div className="ph-pl">
                      <div className="pos-pl">F</div>
                      <img src="../images/player2.jpg"/>
                    </div>
                    <div className="name-pl">
                      <a href="#" className="player">S.Giovinko</a>
                      <img src="../images/board.png"/>
                    </div>
                    <p className="opponent"><b>Tor</b> @ Dc<span>100%</span></p>
                  </div>
                </li>
                <li>
                  <div className="wrap-ls">
                    <div className="ph-pl">
                      <div className="pos-pl">F</div>
                      <img src="../images/player2.jpg"/>
                    </div>
                    <div className="name-pl">
                      <a href="#" className="player">S.Giovinko</a>
                      <img src="../images/board.png"/>
                    </div>
                    <p className="opponent"><b>Tor</b> @ Dc<span>100%</span></p>
                  </div>
                </li>
                <li>
                  <div className="wrap-ls">
                    <div className="ph-pl">
                      <div className="pos-pl">F</div>
                      <img src="../images/player2.jpg"/>
                    </div>
                    <div className="name-pl">
                      <a href="#" className="player">S.Giovinko</a>
                      <img src="../images/board.png"/>
                    </div>
                    <p className="opponent"><b>Tor</b> @ Dc<span>100%</span></p>
                  </div>
                </li>
                <li>
                  <div className="wrap-ls">
                    <div className="ph-pl">
                      <div className="pos-pl">F</div>
                      <img src="../images/player2.jpg"/>
                    </div>
                    <div className="name-pl">
                      <a href="#" className="player">S.Giovinko</a>
                      <img src="../images/board.png"/>
                    </div>
                    <p className="opponent"><b>Tor</b> @ Dc<span>100%</span></p>
                  </div>
                </li>
                <li>
                  <div className="wrap-ls">
                    <div className="ph-pl">
                      <div className="pos-pl">F</div>
                      <img src="../images/player2.jpg"/>
                    </div>
                    <div className="name-pl">
                      <a href="#" className="player">S.Giovinko</a>
                      <img src="../images/board.png"/>
                    </div>
                    <p className="opponent"><b>Tor</b> @ Dc<span>100%</span></p>
                  </div>
                </li>
                <li>
                  <div className="wrap-ls">
                    <div className="ph-pl">
                      <div className="pos-pl">F</div>
                      <img src="../images/player2.jpg"/>
                    </div>
                    <div className="name-pl">
                      <a href="#" className="player">S.Giovinko</a>
                      <img src="../images/board.png"/>
                    </div>
                    <p className="opponent"><b>Tor</b> @ Dc<span>100%</span></p>
                  </div>
                </li>
                <li>
                  <div className="wrap-ls">
                    <div className="ph-pl">
                      <div className="pos-pl">F</div>
                      <img src="../images/player2.jpg"/>
                    </div>
                    <div className="name-pl">
                      <a href="#" className="player">S.Giovinko</a>
                      <img src="../images/board.png"/>
                    </div>
                    <p className="opponent"><b>Tor</b> @ Dc<span>100%</span></p>
                  </div>
                </li>
              </ul>
              <div className="table-upcoming">
                <table data-tb='2_1'>
                  <thead>
                    <tr>
                      <th>CONTEST NAME</th>
                      <th>MY ENTRIES</th>
                      <th>FEE</th>
                      <th>TOTAL PRIZES</th>
                      <th>ENTRIES</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="body-2_1">
                    <tr data-id="2_1">
                        <td>
                          <i className="fa fa-times-circle-o" aria-hidden="true"></i>
                          <p className="inf-pl">
                            <span className="pr"><strong>$10 MILLION</strong></span>
                              <span className="sport">Football</span>
                              <span className="leag">EPL</span>
                              <span className="view">Cup Finals</span>
                          </p>
                          <a href="#">Salary Cap</a>
                            <i className="fa fa-circle" aria-hidden="true"></i>
                          <a href="#">GPP</a>
                            <i className="fa fa-circle" aria-hidden="true"></i>
                          <a href="#">Multi Entry (100)</a>
                        </td>
                        <td>2</td>
                      <td>$10,500</td>
                      <td>$10,000,000</td>
                      <td>218956 / 300K</td>
                      <td className="show-e">SHOW ENTRIES<i className="fa fa-sort-desc" aria-hidden="true"></i></td>
                      <td className="hide-e">HIDE ENTRIES<i className="fa fa-caret-up" aria-hidden="true"></i></td>
                      <tr className="all-enteries row-id-2_1" >
                          <td>
                            <i className="fa fa-times-circle-o" aria-hidden="true"></i>
                            <p className="inf-pl">
                              <span className="pr"><strong>$10 MILLION</strong></span>
                              <span className="sport">Football</span>
                              <span className="leag">EPL</span>
                              <span className="view">Cup Finals</span>
                            </p>
                            <a href="#">Entry ID #1</a>
                          </td>
                          <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="edit"><button className="blue-button edit-entr">EDIT ENTRY</button></td>
                      </tr>
                      <tr className="all-enteries row-id-2_1">
                          <td>
                            <i className="fa fa-times-circle-o" aria-hidden="true"></i>
                            <p className="inf-pl">
                              <span className="pr"><strong>$10 MILLION</strong></span>
                              <span className="sport">Football</span>
                              <span className="leag">EPL</span>
                              <span className="view">Cup Finals</span>
                            </p>
                            <a href="#">Entry ID #1</a>
                          </td>
                          <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="edit"><button className="blue-button edit-entr">EDIT ENTRY</button></td>
                      </tr>
                    </tr>
                    <tr data-id="2_2">
                        <td>
                          <i className="fa fa-times-circle-o" aria-hidden="true"></i>
                          <p className="inf-pl">
                            <span className="pr"><strong>$10 MILLION</strong></span>
                            <span className="sport">Football</span>
                            <span className="leag">EPL</span>
                            <span className="view">Cup Finals</span>
                          </p>
                          <a href="#">Salary Cap</a>
                            <i className="fa fa-circle" aria-hidden="true"></i>
                          <a href="#">GPP</a>
                            <i className="fa fa-circle" aria-hidden="true"></i>
                          <a href="#">Multi Entry (100)</a>
                        </td>
                        <td>2</td>
                      <td>$10,500</td>
                      <td>$10,000,000</td>
                      <td>218956 / 300K</td>
                      <td className="show-e">SHOW ENTRIES<i className="fa fa-sort-desc" aria-hidden="true"></i></td>
                      <td className="hide-e">HIDE ENTRIES<i className="fa fa-caret-up" aria-hidden="true"></i></td>
                      <tr className="all-enteries row-id-2_2" >
                          <td>
                            <i className="fa fa-times-circle-o" aria-hidden="true"></i>
                            <p className="inf-pl">
                              <span className="pr"><strong>$10 MILLION</strong></span>
                              <span className="sport">Football</span>
                              <span className="leag">EPL</span>
                              <span className="view">Cup Finals</span>
                            </p>
                            <a href="#">Entry ID #1</a>
                          </td>
                          <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="edit"><button className="blue-button edit-entr">EDIT ENTRY</button></td>
                      </tr>
                      <tr className="all-enteries row-id-2.2">
                          <td>
                            <i className="fa fa-times-circle-o" aria-hidden="true"></i>
                            <p className="inf-pl">
                              <span className="pr"><strong>$10 MILLION</strong></span>
                              <span className="sport">Football</span>
                              <span className="leag">EPL</span>
                              <span className="view">Cup Finals</span>
                            </p>
                            <a href="#">Entry ID #1</a>
                          </td>
                          <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="edit"><button className="blue-button edit-entr">EDIT ENTRY</button></td>
                      </tr>
                    </tr>
                  </tbody>
                </table>
                <div className="show-hide-enteries"><p className="show-table">Show entries<i className="fa fa-sort-desc" aria-hidden="true"></i></p><p className="hide-table">Hide entries<i class="fa fa-caret-up" aria-hidden="true"></i></p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
