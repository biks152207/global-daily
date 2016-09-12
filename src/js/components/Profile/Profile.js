import React from 'react';

export default class Profile extends React.Component{
  render(){
    return(
      <div id="content">
        <div className="ads-content upcoming user">
          <div className="wrapper-content">
            <div className="title-info">
              <p className="title-h1">MY PROFILE</p>
            </div>
            <div className="some-text">
              <p>Manage your settings and view your tophies.</p>
            </div>
          </div>
        </div>
        <div className="upcoming-best user">
          <div className="wrapper-content">
            <div className="available col-md-6">
              <div className="block-case">
                <h3>Trophy Case:</h3>
                <div className="block-switch-trophy">
                    <ul className="list-switch-trophy">
                      <li className="active"><span data-id="1">ALL</span></li>
                      <li><span data-id="2">AWARDED</span></li>
                      <li><span data-id="2">UNAWARDED</span></li>
                    </ul>
                  </div>
                <div className="tab-content trophy">
                    <table className="table trophy">
                      <tbody>
                        <tr>
                          <td></td>
                          <td className="tr-name">
                          <p className="trophy">Awarded Trophy Title</p>
                          <span>Win one contest in each football league in one calendar year</span>
                        </td>
                        <td className="tr-date"><p>08/24/2016</p></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td className="tr-name">
                          <p className="trophy">Awarded Trophy Title</p>
                          <span>Win one contest in each football league in one calendar year</span>
                        </td>
                        <td className="tr-date"><p>08/24/2016</p></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td className="tr-name">
                          <p className="trophy">Awarded Trophy Title</p>
                          <span>Win one contest in each football league in one calendar year</span>
                        </td>
                        <td className="tr-date"><p>08/24/2016</p></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td className="tr-name">
                          <p className="trophy">Awarded Trophy Title</p>
                          <span>Win one contest in each football league in one calendar year</span>
                        </td>
                        <td className="tr-date"><p>08/24/2016</p></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td className="tr-name">
                          <p className="trophy">Awarded Trophy Title</p>
                          <span>Win one contest in each football league in one calendar year</span>
                        </td>
                        <td className="tr-date"><p>08/24/2016</p></td>
                        </tr>
                        <tr className="over">
                          <td></td>
                          <td className="tr-name">
                          <p className="trophy">Awarded Trophy Title</p>
                          <span>Win one contest in each football league in one calendar year</span>
                        </td>
                        <td className="tr-date"><p>08/24/2016</p></td>
                        </tr>
                        <tr className="over">
                          <td></td>
                          <td className="tr-name">
                          <p className="trophy">Awarded Trophy Title</p>
                          <span>Win one contest in each football league in one calendar year</span>
                        </td>
                        <td className="tr-date"><p>08/24/2016</p></td>
                        </tr>
                        <tr className="over">
                          <td></td>
                          <td className="tr-name">
                          <p className="trophy">Awarded Trophy Title</p>
                          <span>Win one contest in each football league in one calendar year</span>
                        </td>
                        <td className="tr-date"><p>08/24/2016</p></td>
                        </tr>
                        <tr className="over">
                          <td></td>
                          <td className="tr-name">
                          <p className="trophy">Awarded Trophy Title</p>
                          <span>Win one contest in each football league in one calendar year</span>
                        </td>
                        <td className="tr-date"><p>08/24/2016</p></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
              </div>
            </div>
            <div className="available col-md-6">
              <div className="block-details">
                <h3>Manage Personal Details:</h3>
                <div className="block-name">
                  <div className="photo">
                    <img src="../images/edit-icon.png"/>
                  </div>
                  <div className="loc-name">
                    <p className="det-name">Player Name: <span>PlayerNameHere</span><img src="../images/edit-icon.png"/></p>
                    <p className="der-loc">Player Location: <span>PlayerLocationHere</span><img src="../images/edit-icon.png"/></p>
                  </div>
                </div>
                <div className="recieve-email">
                  <p className="title-rec">Recieve an email when:</p>
                  <ul className="list-rec-em">
                    <li className="my-c">
                      <p className="my-contests">My contest(s) starts:</p>
                      <div className="tab">
                        <span className="yes active">Yes</span>
                        <span className="no">No</span>
                      </div>
                    </li>
                    <li className="cansel">
                      <p className="contests-cancel">One of my contests are cancelled:</p>
                      <div className="tab">
                        <span className="yes active">Yes</span>
                        <span className="no">No</span>
                      </div>
                    </li>
                    <li className="cash">
                      <p className="cash-contests">I cash in a contest:</p>
                      <div className="tab">
                        <span className="yes active">Yes</span>
                        <span className="no">No</span>
                      </div>
                    </li>
                    <li className="line">
                      <p className="line-contests">I have a contest with no lineup 30 mins before start:</p>
                      <div className="tab">
                        <span className="yes active">Yes</span>
                        <span className="no">No</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="block-following">
                  <p className="title-fol">Block the following players from playing in H2H contests with me:</p>
                  <div className="add-player">
                    <input type="search" className="fol" placeholder="Add a player to H2H block list"/>
                    <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                  </div>
                  <div className="tab-content add-players">
                      <table className="table add-pl">
                        <tbody>
                          <tr>
                            <td><p>UserNameHere</p><i className="fa fa-times-circle-o" aria-hidden="true"></i></td>
                            <td className="tr-name"><p>UserNameHere</p><i className="fa fa-times-circle-o" aria-hidden="true"></i></td>
                          <td className="tr-date"><p>UserNameHere</p><i className="fa fa-times-circle-o" aria-hidden="true"></i></td>
                          </tr>
                          <tr>
                            <td><p>UserNameHere</p><i className="fa fa-times-circle-o" aria-hidden="true"></i></td>
                            <td className="tr-name"><p>UserNameHere</p><i className="fa fa-times-circle-o" aria-hidden="true"></i></td>
                          <td className="tr-date"><p>UserNameHere</p><i className="fa fa-times-circle-o" aria-hidden="true"></i></td>
                          </tr>
                          <tr>
                            <td><p>UserNameHere</p><i className="fa fa-times-circle-o" aria-hidden="true"></i></td>
                            <td className="tr-name"><p>UserNameHere</p><i className="fa fa-times-circle-o" aria-hidden="true"></i></td>
                          <td className="tr-date"><p>UserNameHere</p><i className="fa fa-times-circle-o" aria-hidden="true"></i></td>
                          </tr>
                          <tr>
                            <td><p>UserNameHere</p><i className="fa fa-times-circle-o" aria-hidden="true"></i></td>
                            <td className="tr-name"><p>UserNameHere</p><i className="fa fa-times-circle-o" aria-hidden="true"></i></td>
                          <td className="tr-date"><p>UserNameHere</p><i className="fa fa-times-circle-o" aria-hidden="true"></i></td>
                          </tr>
                          <tr>
                            <td><p>UserNameHere</p><i className="fa fa-times-circle-o" aria-hidden="true"></i></td>
                            <td className="tr-name"><p>UserNameHere</p><i className="fa fa-times-circle-o" aria-hidden="true"></i></td>
                          <td className="tr-date"><p>UserNameHere</p><i className="fa fa-times-circle-o" aria-hidden="true"></i></td>
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
