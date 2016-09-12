import React from 'react';
import Modal from 'react-modal';

export default class LineupPop extends React.Component{
  render(){
    return(
      <Modal isOpen={this.props.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.props.closeModal}>
      <section className="block-overlay">
        <div className="popup-lineup successfully-entered">
          <div className="wrapper-content">
            <div className="title-info">
              <p className="title-h1">YOU HAVE SUCCESSFULLY ENTERED YOUR LINEUP!</p>
              <p className="close-popup"><i className="fa fa-times-circle-o" aria-hidden="true"></i></p>
            </div>
            <div className="some-text">
              <p>Get matched in H2H contests or use the mini-lobby to quickly enter this lineup in any other contests!  Hit the enter button multiple times to add entries.</p>
            </div>
          </div>
          <div className="best-lineup saved">
            <div className="wrapper-content">
              <p className="title-lineup">The Best Lineup in the World</p>
              <div className="summary-info">
                <p className="contests">Contests Entered: <span>0</span></p>
                <p className="entries">My Entries: <span>0 ($0)</span></p>
                <p className="excess">Excess Salary: <span>$25</span></p>
                <p className="contests-type">Last Edit: <span>07/27 7:45pm</span></p>
              </div>
              <ul className="players-list">
                <li>
                  <div className="wrap-ls">
                    <div className="ph-pl">
                      <div className="pos-pl">F</div>
                      <img src="images/player1.jpg"/>
                    </div>
                    <div className="name-pl">
                      <a href="#" className="player">S.Givinko</a>
                      <img src="images/board.png"/>
                    </div>
                    <p className="opponent"><b>Tor</b> @ Dc<span>100%</span></p>
                  </div>
                </li>
                <li>
                  <div className="wrap-ls">
                    <div className="ph-pl">
                      <div className="pos-pl">F</div>
                      <img src="images/player1.jpg"/>
                    </div>
                    <div className="name-pl">
                      <a href="#" className="player">S.Givinko</a>
                      <img src="images/board.png"/>
                    </div>
                    <p className="opponent"><b>Tor</b> @ Dc<span>100%</span></p>
                  </div>
                </li>
                <li>
                  <div className="wrap-ls">
                    <div className="ph-pl">
                      <div className="pos-pl">F</div>
                      <img src="images/player1.jpg"/>
                    </div>
                    <div className="name-pl">
                      <a href="#" className="player">S.Givinko</a>
                      <img src="images/board.png"/>
                    </div>
                    <p className="opponent"><b>Tor</b> @ Dc<span>100%</span></p>
                  </div>
                </li>
                <li>
                  <div className="wrap-ls">
                    <div className="ph-pl">
                      <div className="pos-pl">F</div>
                      <img src="images/player1.jpg"/>
                    </div>
                    <div className="name-pl">
                      <a href="#" className="player">S.Givinko</a>
                      <img src="images/board.png"/>
                    </div>
                    <p className="opponent"><b>Tor</b> @ Dc<span>100%</span></p>
                  </div>
                </li>
                <li>
                  <div className="wrap-ls">
                    <div className="ph-pl">
                      <div className="pos-pl">F</div>
                      <img src="images/player1.jpg"/>
                    </div>
                    <div className="name-pl">
                      <a href="#" className="player">S.Givinko</a>
                      <img src="images/board.png"/>
                    </div>
                    <p className="opponent"><b>Tor</b> @ Dc<span>100%</span></p>
                  </div>
                </li>
                <li>
                  <div className="wrap-ls">
                    <div className="ph-pl">
                      <div className="pos-pl">F</div>
                      <img src="images/player1.jpg"/>
                    </div>
                    <div className="name-pl">
                      <a href="#" className="player">S.Givinko</a>
                      <img src="images/board.png"/>
                    </div>
                    <p className="opponent"><b>Tor</b> @ Dc<span>100%</span></p>
                  </div>
                </li>
                <li>
                  <div className="wrap-ls">
                    <div className="ph-pl">
                      <div className="pos-pl">F</div>
                      <img src="images/player1.jpg"/>
                    </div>
                    <div className="name-pl">
                      <a href="#" className="player">S.Givinko</a>
                      <img src="images/board.png"/>
                    </div>
                    <p className="opponent"><b>Tor</b> @ Dc<span>100%</span></p>
                  </div>
                </li>
                <li>
                  <div className="wrap-ls">
                    <div className="ph-pl">
                      <div className="pos-pl">F</div>
                      <img src="images/player1.jpg"/>
                    </div>
                    <div className="name-pl">
                      <a href="#" className="player">S.Givinko</a>
                      <img src="images/board.png"/>
                    </div>
                    <p className="opponent"><b>Tor</b> @ Dc<span>100%</span></p>
                  </div>
                </li>
                <li>
                  <div className="wrap-ls">
                    <div className="ph-pl">
                      <div className="pos-pl">F</div>
                      <img src="images/player1.jpg"/>
                    </div>
                    <div className="name-pl">
                      <a href="#" className="player">S.Givinko</a>
                      <img src="images/board.png"/>
                    </div>
                    <p className="opponent"><b>Tor</b> @ Dc<span>100%</span></p>
                  </div>
                </li>
                <li>
                  <div className="wrap-ls">
                    <div className="ph-pl">
                      <div className="pos-pl">F</div>
                      <img src="images/player1.jpg"/>
                    </div>
                    <div className="name-pl">
                      <a href="#" className="player">S.Givinko</a>
                      <img src="images/board.png"/>
                    </div>
                    <p className="opponent"><b>Tor</b> @ Dc<span>100%</span></p>
                  </div>
                </li>
                <li>
                  <div className="wrap-ls">
                    <div className="ph-pl">
                      <div className="pos-pl">F</div>
                      <img src="images/player1.jpg"/>
                    </div>
                    <div className="name-pl">
                      <a href="#" className="player">S.Givinko</a>
                      <img src="images/board.png"/>
                    </div>
                    <p className="opponent"><b>Tor</b> @ Dc<span>100%</span></p>
                  </div>
                </li>
              </ul>
              <a href="#" className="green-button match">MATCH ME IN A HEAD TO HEAD CONTEST WITH THIS LINEUP</a>
            </div>
            <div className="tab-content">
                  <table className="table saved">
                    <thead>
                      <tr>
                        <th>CONTEST NAME</th>
                        <th className="enter">MY ENTRIES<i className="fa fa-sort-desc" aria-hidden="true"></i></th>
                        <th>Fee</th>
                        <th>PRIZES</th>
                        <th>SIZE</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p className="inf-pl">
                            <span>$10 MILLION</span>
                            <span>Football</span>
                            <span>EPL</span>
                            <span>Cup Finals</span>
                          </p>
                          <a href="#">Salary Cap</a>
                            <i className="fa fa-circle" aria-hidden="true"></i>
                          <a href="#">GPP</a>
                            <i className="fa fa-circle" aria-hidden="true"></i>
                          <a href="#">Multi Entry (100)</a>
                        </td>
                        <td>0 / 100<span className="add-enteries">(+1)</span></td>
                        <td>$10,500</td>
                      <td>$10,000,000</td>
                      <td>58956 / 100K</td>
                      <td>
                        <button className="btn btn-success">Enter</button>
                        <button className="btn btn-success-active">Add entry</button>
                      </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="inf-pl">
                            <span>$10 MILLION</span>
                            <span>Football</span>
                            <span>EPL</span>
                            <span>Cup Finals</span>
                          </p>
                          <a href="#">Salary Cap</a>
                            <i className="fa fa-circle" aria-hidden="true"></i>
                          <a href="#">GPP</a>
                            <i className="fa fa-circle" aria-hidden="true"></i>
                          <a href="#">Multi Entry (100)</a>
                        </td>
                        <td>0 / 100<span className="add-enteries">(+1)</span></td>
                        <td>$10,500</td>
                      <td>$10,000,000</td>
                      <td>58956 / 100K</td>
                      <td>
                        <button className="btn btn-success">Enter</button>
                        <button className="btn btn-success-active">Add entry</button>
                      </td>
                      </tr>
                      <tr className="active">
                        <td>
                          <p className="inf-pl">
                            <span>$10 MILLION</span>
                            <span>Football</span>
                            <span>EPL</span>
                            <span>Cup Finals</span>
                          </p>
                          <a href="#">Salary Cap</a>
                            <i className="fa fa-circle" aria-hidden="true"></i>
                          <a href="#">GPP</a>
                            <i className="fa fa-circle" aria-hidden="true"></i>
                          <a href="#">Multi Entry (100)</a>
                        </td>
                        <td>99 / 100<span className="add-enteries">(+1)</span></td>
                        <td>$10,500</td>
                      <td>$10,000,000</td>
                      <td>58956 / 100K</td>
                      <td>
                        <button className="btn btn-success">Enter</button>
                        <button className="btn btn-success-active">Add entry</button>
                      </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="inf-pl">
                            <span>$10 MILLION</span>
                            <span>Football</span>
                            <span>EPL</span>
                            <span>Cup Finals</span>
                          </p>
                          <a href="#">Salary Cap</a>
                            <i className="fa fa-circle" aria-hidden="true"></i>
                          <a href="#">GPP</a>
                            <i className="fa fa-circle" aria-hidden="true"></i>
                          <a href="#">Multi Entry (100)</a>
                        </td>
                        <td>0 / 100<span className="add-enteries">(+1)</span></td>
                        <td>$10,500</td>
                      <td>$10,000,000</td>
                      <td>58956 / 100K</td>
                      <td>
                        <button className="btn btn-success">Enter</button>
                        <button className="btn btn-success-active">Add entry</button>
                      </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="inf-pl">
                            <span>$10 MILLION</span>
                            <span>Football</span>
                            <span>EPL</span>
                            <span>Cup Finals</span>
                          </p>
                          <a href="#">Salary Cap</a>
                            <i className="fa fa-circle" aria-hidden="true"></i>
                          <a href="#">GPP</a>
                            <i className="fa fa-circle" aria-hidden="true"></i>
                          <a href="#">Multi Entry (100)</a>
                        </td>
                        <td>0 / 100<span className="add-enteries">(+1)</span></td>
                        <td>$10,500</td>
                      <td>$10,000,000</td>
                      <td>58956 / 100K</td>
                      <td>
                        <button className="btn btn-success">Enter</button>
                        <button className="btn btn-success-active">Add entry</button>
                      </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="inf-pl">
                            <span>$10 MILLION</span>
                            <span>Football</span>
                            <span>EPL</span>
                            <span>Cup Finals</span>
                          </p>
                          <a href="#">Salary Cap</a>
                            <i className="fa fa-circle" aria-hidden="true"></i>
                          <a href="#">GPP</a>
                            <i className="fa fa-circle" aria-hidden="true"></i>
                          <a href="#">Multi Entry (100)</a>
                        </td>
                        <td>0 / 100<span className="add-enteries">(+1)</span></td>
                        <td>$10,500</td>
                      <td>$10,000,000</td>
                      <td>58956 / 100K</td>
                      <td>
                        <button className="btn btn-success">Enter</button>
                        <button className="btn btn-success-active">Add entry</button>
                      </td>
                      </tr>
                      <tr className="active">
                        <td>
                          <p className="inf-pl">
                            <span>$10 MILLION</span>
                            <span>Football</span>
                            <span>EPL</span>
                            <span>Cup Finals</span>
                          </p>
                          <a href="#">Salary Cap</a>
                            <i className="fa fa-circle" aria-hidden="true"></i>
                          <a href="#">GPP</a>
                            <i className="fa fa-circle" aria-hidden="true"></i>
                          <a href="#">Multi Entry (100)</a>
                        </td>
                        <td>99 / 100<span className="add-enteries">(+1)</span></td>
                        <td>$10,500</td>
                      <td>$10,000,000</td>
                      <td>58956 / 100K</td>
                      <td>
                        <button className="btn btn-success">Enter</button>
                        <button className="btn btn-success-active">Add entry</button>
                      </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="inf-pl">
                            <span>$10 MILLION</span>
                            <span>Football</span>
                            <span>EPL</span>
                            <span>Cup Finals</span>
                          </p>
                          <a href="#">Salary Cap</a>
                            <i className="fa fa-circle" aria-hidden="true"></i>
                          <a href="#">GPP</a>
                            <i className="fa fa-circle" aria-hidden="true"></i>
                          <a href="#">Multi Entry (100)</a>
                        </td>
                        <td>0 / 100<span className="add-enteries">(+1)</span></td>
                        <td>$10,500</td>
                      <td>$10,000,000</td>
                      <td>58956 / 100K</td>
                      <td>
                        <button className="btn btn-success">Enter</button>
                        <button className="btn btn-success-active">Add entry</button>
                      </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="inf-pl">
                            <span>$10 MILLION</span>
                            <span>Football</span>
                            <span>EPL</span>
                            <span>Cup Finals</span>
                          </p>
                          <a href="#">Salary Cap</a>
                            <i className="fa fa-circle" aria-hidden="true"></i>
                          <a href="#">GPP</a>
                            <i className="fa fa-circle" aria-hidden="true"></i>
                          <a href="#">Multi Entry (100)</a>
                        </td>
                        <td>0 / 100<span className="add-enteries">(+1)</span></td>
                        <td>$10,500</td>
                      <td>$10,000,000</td>
                      <td>58956 / 100K</td>
                      <td>
                        <button className="btn btn-success">Enter</button>
                        <button className="btn btn-success-active">Add entry</button>
                      </td>
                      </tr>
                    </tbody>
                  </table>
            </div>
          </div>
          <div className="wrapper-content">
            <div className="button-block suc">
              <p>Total New Entries: <span>40</span></p>
              <p>Total New Fees: <span>$10,500</span></p>
              <a href="#" className="blue-button to-lobby">GO TO THE LOBBY</a>
              <a href="#" className="blue-button upcoming">GO TO UPCOMING</a>
            </div>

          </div>
        </div>
      </section>
      </Modal>
    )
  }
}
