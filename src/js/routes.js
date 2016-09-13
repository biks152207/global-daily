import React from 'react';
import { Route, IndexRoute, Redirect, hashHistory, IndexRedirect,DefaultRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home/Home';
import LobbyHome from './components/Lobby/LobbyHome';
import LobbyFeatured from './components/LobbyFeatured/LobbyFeatured';
import Profile from './components/Profile/Profile';
import Live from './components/Live/Live';
import GlobalSwap from './components/GlobalSwap/GlobalSwap';
import LobbyFootball from './components/LobbyFootball/LobbyFootball';
import UpcomingNoContests from './components/UpcomingNoContests/UpcomingNoContests.js';
import UpcomingMain from './components/UpcomingMain/UpcomingMain.js';
import UpcomingEnc from './components/UpcomingEnc/UpcomingEnc.js';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import DraftRoomSc from './components/DraftRoomSc/DraftRoomSc';
import Match from './components/Match/Match';
import DraftRoomScPs from './components/DraftRoomScPs/DraftRoomScPs';
import DraftRoomPp from './components/DraftRoomPp/DraftRoomPp';
export default (
  <Route path="/"  component={App}>
      <IndexRoute  component={Home}/>
      <Route path="lobby" component={LobbyHome}>
        <Route path="football" component={LobbyFootball}/>
        <Route path="profile" component={Profile}/>
        <Route path="live" component={Live}/>
        <Route path="globalswap" component={GlobalSwap}/>
        <Route path="upcomingnocontests" component={UpcomingNoContests}/>
        <Route path="scoreboard" component={ScoreBoard}/>
        <Route path="upcomingmain" component={UpcomingMain}/>
        <Route path="upcomingenc" component={UpcomingEnc}/>
      </Route>
      <Route path="draftroomsc" component={DraftRoomSc}/>
      <Route path="match" component={Match}/>
      <Route path="draftroomscps" component={DraftRoomScPs}/>
      <Route path="draftroompp" component={DraftRoomPp}/>


  </Route>
);
