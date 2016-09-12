import React from 'react';
import { Link } from 'react-router'
import Modal from 'react-modal';
import '../../../styles/styles.scss';


export default class ModalComponent extends React.Component{
  render(){
    return(
      <div>
      <header>
      <div className="sub-nav">
        <div className="container-fluid">
          <ul className="list-inline subnav-left pull-left">
            <li><Link to="lobby/home" activeClassName="active">Lobby</Link></li>
            <li><a href="#">Upcoming</a></li>
            <li><a href="#">Live</a></li>
            <li><a href="#">Completed</a></li>
          </ul>
          <ul className="list-inline subnav-right pull-right">
            <li><a href="#"><i className="fa fa-question-circle-o"></i></a></li>
            <li><a href="#"><i className="fa fa-user"></i></a></li>
          </ul>
        </div>
      </div>
      </header>
      {this.props.children}
      </div>
    )
  }
}
