import Frame from 'react-frame-component';
import React from 'react';
import Lobby from './Lobby';

export default class LobbyHome extends React.Component{
  render(){
    return(
      <Frame style={{"height" : "600px", "width": "100%"}} initialContent={this.props.initialContent} >
        <Lobby/>
        {this.props.children}
      </Frame>
    )
  }
}
LobbyHome.defaultProps = {
  initialContent:'<!DOCTYPE html><html><head><link rel="stylesheet"  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/><link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"/><link rel="stylesheet"  href="styles/styles.css"/></head><body><div></div></body></html>'
}
