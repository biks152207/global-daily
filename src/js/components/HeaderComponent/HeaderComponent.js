import React from 'react';
import NavLink from '../modules/NavLink';
export default class HeaderComponent extends React.Component{
  render(){
    return(
      <header>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#"><img src="../images/logo-fall.jpg"/></a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><NavLink to="/">Sports</NavLink></li>
                <li><NavLink to="/in-play"  >In-Play</NavLink></li>
                <li><a href="#">Casino</a></li>
                <li><a href="#">Poker</a></li>
                <li><a href="#">Bingo</a></li>
                <li><a href="#">DFS</a></li>


              </ul>
              <form className="navbar-form navbar-right">
              <a href="javascript:void(0)">Join Now</a>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Username"/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-success">Login</button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}
