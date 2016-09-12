import React from 'react';
import { Link } from 'react-router';
import LineupPop from '../Popups/LineUp';
import SubHeaderComponent from '../SubHeaderComponent/SubHeaderComponent';

class Lobby extends React.Component{
  render(){
    return(
     <div id="wrapper">
     <SubHeaderComponent></SubHeaderComponent>

      <div id="content">

        <article className="ads-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5">
                <div className="first-ad">
                  <div className="row">
                    <div className="col-md-7">
                      <h3>Playin in a H2H Contest</h3>
                      <p>Limit your opponents to players of similar skill or challenge everyone!</p>
                    </div>
                    <div className="col-md-5">
                      <button className="btn btn-orange"><Link to="/match">Match Me in a H2H</Link></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="second-ad">
                  <div className="row">
                    <div className="col-md-7">
                      <h3>Build a Lineup</h3>
                      <p>Select your sport, when to play, then build a lineup tp crush the opposition.</p>
                    </div>
                    <div className="col-md-5">
                      <button onClick={this.openModal} className="btn btn-orange">Build a Lineup</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="third-ad">
                  <p>My Contest Overview</p>
                  <table>
                   <tbody>
                    <tr>
                      <td>Contests Entered:</td>
                      <td className="text-right">1000</td>
                    </tr>
                    <tr>
                      <td>Cash in Play:</td>
                      <td className="text-right">$10,500</td>
                    </tr>
                    <tr>
                      <td>Currently Winning:</td>
                      <td className="text-right">$10M</td>
                    </tr>
                  </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </article>

        <section className="tabs-lobby">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-10">
                <ul className="nav nav-tabs" role="tablist">
                  <li role="presentation" ><Link to="/lobby">Featureds<i className="fa fa-star"></i></Link></li>
                  <li role="presentation"><Link to="/lobby/football">Football<i className="fa fa-futbol-o "></i></Link></li>
                  <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Gold<i className="fa fa-futbol-o "></i></a></li>
                  <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Tennis<i className="fa fa-futbol-o "></i></a></li>
                  <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Cricket<i className="fa fa-futbol-o "></i></a></li>
                  <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Racing<i className="fa fa-futbol-o "></i></a></li>
                  <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Rugby<i className="fa fa-futbol-o "></i></a></li>
                  <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Rugby<i className="fa fa-futbol-o "></i></a></li>
                  <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Rugby<i className="fa fa-futbol-o "></i></a></li>
                  <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">More<i className="fa fa-futbol-o "></i></a></li>
                </ul>

                {this.props.children}
              </div>

              <div className="col-md-2">
                <div id="sidebar" className="next-contest-starts-time">
                  <div className="timer-start">
                    <h4>Next Contest Starts:</h4>
                    <h3>2:34:23</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>
    )
  }
}


export default Lobby;
