import React from 'react';
import { Link } from 'react-router';
export default class InPlay extends React.Component{
  render(){
    return(
      <div id="content">
        <div className="ads-content">
          <div className="wrapper-content">
            <p className="title-h1">Watch me in head to head contests</p>
            <div className="some-text">
              <p>The easiest way to play one on one vs many opponents.  Make your selections below, then choose a lineup and be matched against the chalengers of your choosing.</p>
            </div>
          </div>
        </div>
        <div className="draft-filters">
          <div className="wrapper-content">
            <div className="contest-type">
              <p className="title-content">Select a Contest Type:</p>
              <ul className="filter-tabs">
                <li className="active"><a href="#">Salary Cap<span>Be a manager</span></a></li>
                <li><a href="#">Pro Pick'em<span>Quick and Easy</span></a></li>
              </ul>
            </div>
            <div className="sport-type">
              <p className="title-content">Select a Sport:</p>
              <ul className="filter-tabs">
                <li className="active"><a href="#">Football<span>3 Leagues</span></a></li>
                <li><a href="#">Football<span>10 Leagues</span></a></li>
                <li><a href="#">Football<span>10 Leagues</span></a></li>
                <li><a href="#">Football<span>10 Leagues</span></a></li>
                <li><a href="#">Football<span>10 Leagues</span></a></li>
                <li><a href="#">Football<span>10 Leagues</span></a></li>
                <li><a href="#">Football<span>10 Leagues</span></a></li>
                <li><a href="#">Football<span>10 Leagues</span></a></li>
              </ul>
            </div>
            <div className="league-type">
              <p className="title-content">Select a League:</p>
              <ul className="filter-tabs">
                <li className="active"><a href="#">EPL<span>5 Slates</span></a></li>
                <li><a href="#">EPL<span>5 Slates</span></a></li>
                <li><a href="#">EPL<span>5 Slates</span></a></li>
                <li><a href="#">EPL<span>5 Slates</span></a></li>
                <li><a href="#">EPL<span>5 Slates</span></a></li>
                <li><a href="#">EPL<span>5 Slates</span></a></li>
                <li><a href="#">EPL<span>5 Slates</span></a></li>
                <li><a href="#">EPL<span>5 Slates</span></a></li>
                <li><a href="#">EPL<span>5 Slates</span></a></li>
                <li><a href="#">EPL<span>5 Slates</span></a></li>
                <li><a href="#">EPL<span>5 Slates</span></a></li>
                <li><a href="#">EPL<span>5 Slates</span></a></li>
              </ul>
            </div>
            <div className="slate-type">
              <p className="title-content">Select a Game Slate:</p>
              <ul className="filter-tabs">
                <li className="active"><a href="#">10 Games<span>12pm - 12/16</span></a></li>
                <li><a href="#">10 Games<span>12pm - 12/16</span></a></li>
                <li><a href="#">10 Games<span>12pm - 12/16</span></a></li>
                <li><a href="#">10 Games<span>12pm - 12/16</span></a></li>
                <li><a href="#">10 Games<span>12pm - 12/16</span></a></li>
                <li><a href="#">10 Games<span>12pm - 12/16</span></a></li>
                <li><a href="#">10 Games<span>12pm - 12/16</span></a></li>
                <li><a href="#">10 Games<span>12pm - 12/16</span></a></li>
                <li><a href="#">10 Games<span>12pm - 12/16</span></a></li>
                <li><a href="#">10 Games<span>12pm - 12/16</span></a></li>
              </ul>
            </div>
            <div className="slate-type">
              <p className="title-content">Select Entries & Fees:</p>
              <ul className="filter-tabs-slate">
                <li>
                    <input type="checkbox" className="checkbox-slate" id="slate" />
                    <label for="slate">Free</label>
                    <select>
                      <option>1</option>
                      <option>2</option>
                  </select>
                  </li>
                  <li>
                    <input type="checkbox" className="checkbox-slate" id="slate1" />
                    <label for="slate1">10500</label>
                    <select>
                      <option>1</option>
                      <option>2</option>
                  </select>
                  </li>
                  <li>
                    <input type="checkbox" className="checkbox-slate" id="slate2" />
                    <label for="slate2">Free</label>
                    <select>
                      <option>1</option>
                      <option>2</option>
                  </select>
                  </li>
                  <li>
                    <input type="checkbox" className="checkbox-slate" id="slate3" />
                    <label for="slate3">10500</label>
                    <select>
                      <option>1</option>
                      <option>2</option>
                  </select>
                  </li><li>
                    <input type="checkbox" className="checkbox-slate" id="slate4" />
                    <label for="slate4">Free</label>
                    <select>
                      <option>1</option>
                      <option>2</option>
                  </select>
                  </li>
                  <li>
                    <input type="checkbox" className="checkbox-slate" id="slate5" />
                    <label for="slate5">10500</label>
                    <select>
                      <option>1</option>
                      <option>2</option>
                  </select>
                  </li><li>
                    <input type="checkbox" className="checkbox-slate" id="slate6" />
                    <label for="slate6">Free</label>
                    <select>
                      <option>1</option>
                      <option>2</option>
                  </select>
                  </li>
                  <li>
                    <input type="checkbox" className="checkbox-slate" id="slate7" />
                    <label for="slate7">10500</label>
                    <select>
                      <option>1</option>
                      <option>2</option>
                  </select>
                  </li><li>
                    <input type="checkbox" className="checkbox-slate" id="slate8" />
                    <label for="slate8">Free</label>
                    <select>
                      <option>1</option>
                      <option>2</option>
                  </select>
                  </li>
                  <li>
                    <input type="checkbox" className="checkbox-slate" id="slate9" />
                    <label for="slate9">10500</label>
                    <select>
                      <option>1</option>
                      <option>2</option>
                  </select>
                  </li>
              </ul>
            </div>
            <div className="match-type">
              <p className="title-content">Match Me Vs:</p>
              <ul className="filter-tabs">
                <li className="active"><a href="#">Match Me Based on Skill<span>Only play those of similar skill</span></a></li>
                <li><a href="#">Match Me Against Anyone<span>Take on all challenegers</span></a></li>
              </ul>
            </div>
            <div className="limits-type">
              <p className="title-content">Opponent Limits:</p>
              <ul className="filter-tabs">
                <li className="active"><a href="#">Do Not Limit My Matches<span>Play opponents multiple times</span></a></li>
                <li><a href="#">Limit My Matches<span>Only match 1 opponent at each entry level</span></a></li>
              </ul>
              <a href="#" className="block-specific">Block specific opponents entirely</a>
            </div>
          </div>
        </div>
        <div className="draft-results">
          <div className="wrapper-content">
            <ul className="draft-list">
              <li>
                <p>Contest Type: <span>Salary Cap</span></p>
              </li>
              <li>
                <p>Sport: <span>Football</span></p>
              </li>
              <li>
                <p>League: <span>EPL</span></p>
              </li>
              <li>
                <p>Game Slate: <span>5 Games - 12:00pm 12/16 Contest</span></p>
              </li>
              <li>
                <p>Total Entries: <span>100</span></p>
              </li>
              <li>
                <p>Total Fees: <span>100</span></p>
              </li>
              <li>
                <p>Match: <span>Skill</span></p>
              </li>
              <li>
                <p>Limits: <span>No Limit</span></p>
              </li>
            </ul>
            <a href="#" className="continue">Continue to draft room</a>
          </div>
        </div>

      </div>

    )
  }
}
