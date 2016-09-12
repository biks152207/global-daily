import React, { Component } from 'react';

export default class ScoreBoard extends Component{
  render(){
    return(
      <div id="content" className="pp">
        <div className="ads-content draft scoreboard">
          <div className="wrapper-content">
            <div className="title-info">
              <p className="title-h1">LIVE SCOREBOARD</p>
            </div>
            <div className="some-text scoreboard">
              <img src="../images/ball.svg" alt="ball" className="top-ball"/>
              <div className="wrap-text">
                <p className="match-preview">$10 MILLION Football EPL Cup Finals <i className="fa fa-info-circle" aria-hidden="true"></i></p>
                <div className="prop-m">
                  <span className="sal">Salary Cap</span>
                      <i className="fa fa-circle" aria-hidden="true"></i>
                    <span className="gpp">Guaranteed</span>
                      <i className="fa fa-circle" aria-hidden="true"></i>
                    <span className="m-entry">Multi Entry (100)</span>
                  </div>
                <p className="properties-match">
                  <span className="entries">My Entries: <b>00</b></span>
                  <span className="entrants">Entrants: <b>234000</b></span>
                  <span className="prize">Prize Pool: <b>$10,000,000</b></span>
                  <span className="entry-fee">Entry Fee: <b>$10,500</b></span>
                  <span className="winin">Winning: <b>$1,000,000</b></span>
                </p>

              </div>
              <div className="block-slider-lineup">
                <p>The Best Lineup in the World</p>
                <div className="slider-lineup"></div>
                <div className="lin-best">
                  <div className="slider-lineup-best"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="draft-match scoreboard">
          <div className="wrapper-content">
            <div className="match-list not-check scorebord">
              <ul>
                <li>
                  <p className="country">2 TOR</p>
                  <p className="country">1 DC</p>
                    <img src="../images/sun.png" alt="sun"/>
                    <p>1st Half - 43:45</p>
                </li>
                <li>
                  <p className="country">2 TOR</p>
                  <p className="country">1 DC</p>
                    <img src="../images/sun.png" alt="sun"/>
                    <p>1st Half - 43:45</p>
                </li>
                <li>
                  <p className="country">2 TOR</p>
                  <p className="country">1 DC</p>
                    <img src="../images/sun.png" alt="sun"/>
                    <p>1st Half - 43:45</p>
                </li>
                <li>
                  <p className="country">2 TOR</p>
                  <p className="country">1 DC</p>
                    <img src="../images/sun.png" alt="sun"/>
                    <p>1st Half - 43:45</p>
                </li>
                <li>
                  <p className="country">2 TOR</p>
                  <p className="country">1 DC</p>
                    <img src="../images/sun.png" alt="sun"/>
                    <p>1st Half - 43:45</p>
                </li>
                <li>
                  <p className="country">2 TOR</p>
                  <p className="country">1 DC</p>
                    <img src="../images/sun.png" alt="sun"/>
                    <p>1st Half - 43:45</p>
                </li>
                <li>
                  <p className="country">2 TOR</p>
                  <p className="country">1 DC</p>
                    <img src="../images/sun.png" alt="sun"/>
                    <p>1st Half - 43:45</p>
                </li>
                <li>
                  <p className="country">2 TOR</p>
                  <p className="country">1 DC</p>
                    <img src="../images/sun.png" alt="sun"/>
                    <p>1st Half - 43:45</p>
                </li>
                <li>
                  <p className="country">2 TOR</p>
                  <p className="country">1 DC</p>
                    <img src="../images/sun.png" alt="sun"/>
                    <p>1st Half - 43:45</p>
                </li>
                <li>
                  <p className="country">2 TOR</p>
                  <p className="country">1 DC</p>
                    <img src="../images/sun.png" alt="sun"/>
                    <p>1st Half - 43:45</p>
                </li>
                <li>
                  <p className="country">2 TOR</p>
                  <p className="country">1 DC</p>
                    <img src="../images/sun.png" alt="sun"/>
                    <p>1st Half - 43:45</p>
                </li>
                <li>
                  <p className="country">2 TOR</p>
                  <p className="country">1 DC</p>
                    <img src="../images/sun.png" alt="sun"/>
                    <p>1st Half - 43:45</p>
                </li>
              </ul>
            </div>
            <div className="available-athlete row scorebord">
              <div className="available col-md-6">
                <div className="block-title score">
                  <p className="available-title">My Lineup Live Scores: <span>Select an athlete to view details</span></p>
                  <a href="#" className="load-csv">Download player pool (CSV)</a>
                </div>
                <div className="scores-list">
                  <div className="block-best-lineup">
                    <table className="best-lineup">
                      <tbody>
                        <tr>
                          <td className="sc-pos"><p>T #1<span>POSITION</span></p></td>
                          <td className="sc-name">
                            <img src="../images/player.jpg"/>
                            <p>DannyDizzle</p>
                            <span>The Best Lineup in the World (2 Entries)</span>
                          </td>
                          <td className="sc-win"><p>$1,000,000<span>WINNING</span></p></td>
                          <td className="sc-pmr"><p>900<span>PMR</span></p></td>
                          <td className="sc-pts"><p>157.50<span>PTS</span></p></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="scores-table">
                    <table className="table scorebord">
                        <tbody>
                          <tr>
                            <td><img src="../images/giovinco.jpg"/></td>
                            <td className="sc-pl">
                              <div className="top-line">
                              <p className="pos">F</p>
                              <a href="#" className="player">Sebastian Giovinco</a>
                              <img src="../images/board.png"/>
                              <img src="../images/board.png"/>
                            </div>
                            <div className="bottom-line">
                              <p className="leag"><b>ENG 3 ENG</b> @ 1 ITA</p>
                              <img src="../images/eye.png"/>
                              <span className="tm">1st Half 34:32</span>
                            </div>
                          </td>
                          <td className="entities in"><p>21<span>% USED</span></p></td>
                          <td className="sal"><p>56<span>PMR</span></p></td>
                          <td><p>37.50<span>PTS</span></p></td>
                          </tr>
                          <tr>
                            <td><img src="../images/giovinco.jpg"/></td>
                            <td className="sc-pl">
                              <div className="top-line">
                              <p className="pos">F</p>
                              <a href="#" className="player">Sebastian Giovinco</a>
                              <img src="../images/board.png"/>
                              <img src="../images/board.png"/>
                            </div>
                            <div className="bottom-line">
                              <p className="leag"><b>ENG 3 ENG</b> @ 1 ITA</p>
                              <img src="../images/eye.png"/>
                              <span className="tm">1st Half 34:32</span>
                            </div>
                          </td>
                          <td className="entities in"><p>21<span>% USED</span></p></td>
                          <td className="sal"><p>56<span>PMR</span></p></td>
                          <td><p>37.50<span>PTS</span></p></td>
                          </tr>
                          <tr>
                            <td><img src="../images/giovinco.jpg"/></td>
                            <td className="sc-pl">
                              <div className="top-line">
                              <p className="pos">F</p>
                              <a href="#" className="player">Sebastian Giovinco</a>
                              <img src="../images/board.png"/>
                              <img src="../images/board.png"/>
                            </div>
                            <div className="bottom-line">
                              <p className="leag"><b>ENG 3 ENG</b> @ 1 ITA</p>
                              <img src="../images/eye.png"/>
                              <span className="tm">1st Half 34:32</span>
                            </div>
                          </td>
                          <td className="entities in"><p>21<span>% USED</span></p></td>
                          <td className="sal"><p>56<span>PMR</span></p></td>
                          <td><p>37.50<span>PTS</span></p></td>
                          </tr>
                          <tr>
                            <td><img src="../images/giovinco.jpg"/></td>
                            <td className="sc-pl">
                              <div className="top-line">
                              <p className="pos">F</p>
                              <a href="#" className="player">Sebastian Giovinco</a>
                              <img src="../images/board.png"/>
                              <img src="../images/board.png"/>
                            </div>
                            <div className="bottom-line">
                              <p className="leag"><b>ENG 3 ENG</b> @ 1 ITA</p>
                              <img src="../images/eye.png"/>
                              <span className="tm">1st Half 34:32</span>
                            </div>
                          </td>
                          <td className="entities in"><p>21<span>% USED</span></p></td>
                          <td className="sal"><p>56<span>PMR</span></p></td>
                          <td><p>37.50<span>PTS</span></p></td>
                          </tr>
                          <tr>
                            <td><img src="../images/giovinco.jpg"/></td>
                            <td className="sc-pl">
                              <div className="top-line">
                              <p className="pos">F</p>
                              <a href="#" className="player">Sebastian Giovinco</a>
                              <img src="../images/board.png"/>
                              <img src="../images/board.png"/>
                            </div>
                            <div className="bottom-line">
                              <p className="leag"><b>ENG 3 ENG</b> @ 1 ITA</p>
                              <img src="../images/eye.png"/>
                              <span className="tm">1st Half 34:32</span>
                            </div>
                          </td>
                          <td className="entities in"><p>21<span>% USED</span></p></td>
                          <td className="sal"><p>56<span>PMR</span></p></td>
                          <td><p>37.50<span>PTS</span></p></td>
                          </tr>
                          <tr>
                            <td><img src="../images/giovinco.jpg"/></td>
                            <td className="sc-pl">
                              <div className="top-line">
                              <p className="pos">F</p>
                              <a href="#" className="player">Sebastian Giovinco</a>
                              <img src="../images/board.png"/>
                              <img src="../images/board.png"/>
                            </div>
                            <div className="bottom-line">
                              <p className="leag"><b>ENG 3 ENG</b> @ 1 ITA</p>
                              <img src="../images/eye.png"/>
                              <span className="tm">1st Half 34:32</span>
                            </div>
                          </td>
                          <td className="entities in"><p>21<span>% USED</span></p></td>
                          <td className="sal"><p>56<span>PMR</span></p></td>
                          <td><p>37.50<span>PTS</span></p></td>
                          </tr>
                          <tr>
                            <td><img src="../images/giovinco.jpg"/></td>
                            <td className="sc-pl">
                              <div className="top-line">
                              <p className="pos">F</p>
                              <a href="#" className="player">Sebastian Giovinco</a>
                              <img src="../images/board.png"/>
                              <img src="../images/board.png"/>
                            </div>
                            <div className="bottom-line">
                              <p className="leag"><b>ENG 3 ENG</b> @ 1 ITA</p>
                              <img src="../images/eye.png"/>
                              <span className="tm">1st Half 34:32</span>
                            </div>
                          </td>
                          <td className="entities in"><p>21<span>% USED</span></p></td>
                          <td className="sal"><p>56<span>PMR</span></p></td>
                          <td><p>37.50<span>PTS</span></p></td>
                          </tr>
                          <tr>
                            <td><img src="../images/giovinco.jpg"/></td>
                            <td className="sc-pl">
                              <div className="top-line">
                              <p className="pos">F</p>
                              <a href="#" className="player">Sebastian Giovinco</a>
                              <img src="../images/board.png"/>
                              <img src="../images/board.png"/>
                            </div>
                            <div className="bottom-line">
                              <p className="leag"><b>ENG 3 ENG</b> @ 1 ITA</p>
                              <img src="../images/eye.png"/>
                              <span className="tm">1st Half 34:32</span>
                            </div>
                          </td>
                          <td className="entities in"><p>21<span>% USED</span></p></td>
                          <td className="sal"><p>56<span>PMR</span></p></td>
                          <td><p>37.50<span>PTS</span></p></td>
                          </tr>
                          <tr>
                            <td><img src="../images/giovinco.jpg"/></td>
                            <td className="sc-pl">
                              <div className="top-line">
                              <p className="pos">F</p>
                              <a href="#" className="player">Sebastian Giovinco</a>
                              <img src="../images/board.png"/>
                              <img src="../images/board.png"/>
                            </div>
                            <div className="bottom-line">
                              <p className="leag"><b>ENG 3 ENG</b> @ 1 ITA</p>
                              <img src="../images/eye.png"/>
                              <span className="tm">1st Half 34:32</span>
                            </div>
                          </td>
                          <td className="entities in"><p>21<span>% USED</span></p></td>
                          <td className="sal"><p>56<span>PMR</span></p></td>
                          <td><p>37.50<span>PTS</span></p></td>
                          </tr>
                        </tbody>
                      </table>
                  </div>
                </div>
              </div>
              <div className="athlete col-md-6">
                <div className="block-title">
                  <p className="available-title">Scoreboard: <span>Close H2H to return to full leaderboard</span></p>
                </div>
                <div className="available-list scorebord">
                  <div className="block-switch-scorebord">
                    <ul className="list-switch">
                      <li><span data-id="1">LEADERBOARD</span></li>
                      <li className="active"><span data-id="2">MY LINEUPS</span></li>
                    </ul>
                  </div>
                  <div className="tab-content scorebord">
                      <table className="table scorebord">
                        <tbody>
                          <tr>
                            <td className="sc-position"><p>#1<span>POSITION</span></p></td>
                            <td className="sc-name">
                            <a href="#" className="player">The Best Lineup in the World</a>
                            <p>LINEUP NAME</p>
                          </td>
                          <td className="sc-entr"><p>100<span>ENTRIES</span></p></td>
                          <td className="sc-win"><p>$10,000,000<span>WINNING</span></p></td>
                          <td className="sc-pmr"><p>900<span>PMR</span></p></td>
                          <td className="sc-pts"><p>157.50<span>PTS</span></p></td>
                          </tr>
                          <tr>
                            <td className="sc-position"><p>#1<span>POSITION</span></p></td>
                            <td className="sc-name">
                            <a href="#" className="player">The Best Lineup in the World</a>
                            <p>LINEUP NAME</p>
                          </td>
                          <td className="sc-entr"><p>100<span>ENTRIES</span></p></td>
                          <td className="sc-win"><p>$10,000,000<span>WINNING</span></p></td>
                          <td className="sc-pmr"><p>900<span>PMR</span></p></td>
                          <td className="sc-pts"><p>157.50<span>PTS</span></p></td>
                          </tr>
                          <tr>
                            <td className="sc-position"><p>#1<span>POSITION</span></p></td>
                            <td className="sc-name">
                            <a href="#" className="player">The Best Lineup in the World</a>
                            <p>LINEUP NAME</p>
                          </td>
                          <td className="sc-entr"><p>100<span>ENTRIES</span></p></td>
                          <td className="sc-win"><p>$10,000,000<span>WINNING</span></p></td>
                          <td className="sc-pmr"><p>900<span>PMR</span></p></td>
                          <td className="sc-pts"><p>157.50<span>PTS</span></p></td>
                          </tr>
                          <tr>
                            <td className="sc-position"><p>#1<span>POSITION</span></p></td>
                            <td className="sc-name">
                            <a href="#" className="player">The Best Lineup in the World</a>
                            <p>LINEUP NAME</p>
                          </td>
                          <td className="sc-entr"><p>100<span>ENTRIES</span></p></td>
                          <td className="sc-win"><p>$10,000,000<span>WINNING</span></p></td>
                          <td className="sc-pmr"><p>900<span>PMR</span></p></td>
                          <td className="sc-pts"><p>157.50<span>PTS</span></p></td>
                          </tr>
                          <tr>
                            <td className="sc-position"><p>#1<span>POSITION</span></p></td>
                            <td className="sc-name">
                            <a href="#" className="player">The Best Lineup in the World</a>
                            <p>LINEUP NAME</p>
                          </td>
                          <td className="sc-entr"><p>100<span>ENTRIES</span></p></td>
                          <td className="sc-win"><p>$10,000,000<span>WINNING</span></p></td>
                          <td className="sc-pmr"><p>900<span>PMR</span></p></td>
                          <td className="sc-pts"><p>157.50<span>PTS</span></p></td>
                          </tr>
                          <tr>
                            <td className="sc-position"><p>#1<span>POSITION</span></p></td>
                            <td className="sc-name">
                            <a href="#" className="player">The Best Lineup in the World</a>
                            <p>LINEUP NAME</p>
                          </td>
                          <td className="sc-entr"><p>100<span>ENTRIES</span></p></td>
                          <td className="sc-win"><p>$10,000,000<span>WINNING</span></p></td>
                          <td className="sc-pmr"><p>900<span>PMR</span></p></td>
                          <td className="sc-pts"><p>157.50<span>PTS</span></p></td>
                          </tr>
                        </tbody>
                      </table>
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
