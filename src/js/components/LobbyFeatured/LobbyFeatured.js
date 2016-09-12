import React from 'react';

export default class LobbyFeatured extends React.Component{
  render(){

    return(

      <div className="tab-content">
        <div role="tabpanel" className="tab-pane active" id="home">
          <table className="table table-lobby">
            <thead>
              <tr>
                <th></th>
                <th>Contest name</th>
                <th>Fee</th>
                <th>Prizes <i className="fa fa-caret-down"></i></th>
                <th>ENTRIES <i className="fa fa-info-circle"></i></th>
                <th>Starts (et)</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><i className="fa fa-futbol-o"></i></td>
                <td>
                  <p><strong>$10 MILLION</strong> Football EPL Cup Finals</p>
                <a href="">Salary Cap</a> <a href="">GPP</a> <a href="">Multi Entry(100)</a>
              </td>
              <td>$10,500</td>
              <td>$10,000,000</td>
              <td className="entities in">519856/100K <i className="fa fa-check-circle"></i></td>
              <td>07/24 12:00pm</td>
              <td><button className="btn btn-success">Enter</button></td>
              </tr>
              <tr>
                <td><i className="fa fa-futbol-o"></i></td>
                <td>
                  <p><strong>$10 MILLION</strong> Football EPL Cup Finals</p>
                <a href="">Salary Cap</a> <a href="">GPP</a> <a href="">Multi Entry(100)</a>
              </td>
              <td>$10,500</td>
              <td>$10,000,000</td>
              <td className="entities in">519856/100K <i className="fa fa-check-circle"></i></td>
              <td>07/24 12:00pm</td>
              <td><button className="btn btn-success">Enter</button></td>
              </tr>
              <tr>
                <td><i className="fa fa-futbol-o"></i></td>
                <td>
                  <p><strong>$10 MILLION</strong> Football EPL Cup Finals</p>
                <a href="">Salary Cap</a> <a href="">GPP</a> <a href="">Multi Entry(100)</a>
              </td>
              <td>$10,500</td>
              <td>$10,000,000</td>
              <td className="entities">519856/100K <i className="fa fa-check-circle"></i></td>
              <td>07/24 12:00pm</td>
              <td><button className="btn btn-success">Enter</button></td>
              </tr>
              <tr>
                <td><i className="fa fa-futbol-o"></i></td>
                <td>
                  <p><strong>$10 MILLION</strong> Football EPL Cup Finals</p>
                <a href="">Salary Cap</a> <a href="">GPP</a> <a href="">Multi Entry(100)</a>
              </td>
              <td>$10,500</td>
              <td>$10,000,000</td>
              <td className="entities in">519856/100K <i className="fa fa-check-circle"></i></td>
              <td>07/24 12:00pm</td>
              <td><button className="btn btn-success">Add Entry</button></td>
              </tr>
              <tr>
                <td><i className="fa fa-futbol-o"></i></td>
                <td>
                  <p><strong>$10 MILLION</strong> Football EPL Cup Finals</p>
                <a href="">Salary Cap</a> <a href="">GPP</a> <a href="">Multi Entry(100)</a>
              </td>
              <td>$10,500</td>
              <td>$10,000,000</td>
              <td className="entities">519856/100K <i className="fa fa-check-circle"></i></td>
              <td>07/24 12:00pm</td>
              <td><button className="btn btn-success">Max Entries</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div role="tabpanel" className="tab-pane" id="profile">...</div>
        <div role="tabpanel" className="tab-pane" id="messages">...</div>
        <div role="tabpanel" className="tab-pane" id="settings">...</div>
      </div>

    )
  }
}
