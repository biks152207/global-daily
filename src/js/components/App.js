import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'
import Modal from 'react-modal';
import ModalComponent from './Modal/Modal';
import Frame from 'react-frame';
import HeaderComponent from './HeaderComponent/HeaderComponent';
import LineupPop from './Popups/LineUp';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen : true
    }
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  openModal(){
    this.setState({modalIsOpen: true});
  }
  routeChange(){
  }
  static propTypes = {
    children: PropTypes.element.isRequired
  };
  render() {
    return (
      <div id="wrapper">
        <div id="submenus">
        <HeaderComponent></HeaderComponent>
         {this.props.children}
        </div>
        <footer>
    			<div className="container text-center">
    				<img src="../images/logo-fall2.jpg"/>
    				<ul className="list-inline footer-list">
    					<li><a href="#">Help</a></li>
    					<li><a href="#">Banking</a></li>
    					<li><a href="#">Responsible Gaming</a></li>
    					<li><a href="#">Terms & Conditions</a></li>
    					<li><a href="#">Privacy Policy</a></li>
    				</ul>
    				<img src="../images/footer-logo-list.jpg"/>
    			</div>
    		</footer>

      </div>
    );
  }
}
