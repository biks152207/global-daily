import React from 'react';
import { Link } from 'react-router';
import { NavLink } from '../modules/NavLink';

export default class SubHeaderComponent extends React.Component{
  render(){
    return(
      <header>
        <div className="sub-nav">
          <div className="container-fluid">
            <ul className="list-inline subnav-left pull-left">
              <li><Link to="/lobby" activeClassName="active" >Lobby</Link></li>
              <li><Link to="/lobby/upcoming" activeClassName="active" >Upcoming</Link></li>
              <li><Link to="/lobby/live" activeClassName="active" >Live</Link></li>
              <li><a href="#">Completed</a></li>
            </ul>
            <ul className="list-inline subnav-right pull-right">
              <li><a href="#"><i className="fa fa-question-circle-o"></i></a></li>
              <li><Link to="/Lobby/profile" activeClassName="active"><i className="fa fa-user"></i></Link></li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}
