import React, {Component} from 'react';
import Chart from 'chart.js';

export default class PointsAgainst extends Component {

  componentDidMount() {
    const teams = this.props.teams;

    new Chart(document.getElementById("chartPA"), {
      type: 'horizontalBar',
      data: {
        datasets: [{
          data: [
            teams[0].pointsAgainst,
            teams[1].pointsAgainst,
            teams[2].pointsAgainst,
            teams[3].pointsAgainst,
            teams[4].pointsAgainst,
            teams[5].pointsAgainst,
            teams[6].pointsAgainst,
            teams[7].pointsAgainst,
            teams[8].pointsAgainst,
            teams[9].pointsAgainst
          ],
          backgroundColor: [
            teams[0].color,
            teams[1].color,
            teams[2].color,
            teams[3].color,
            teams[4].color,
            teams[5].color,
            teams[6].color,
            teams[7].color,
            teams[8].color,
            teams[9].color
          ],
        }],

        labels: [
          teams[0].name,
          teams[1].name,
          teams[2].name,
          teams[3].name,
          teams[4].name,
          teams[5].name,
          teams[6].name,
          teams[7].name,
          teams[8].name,
          teams[9].name
        ]
      },
      options: {
        legend: {
          display: false
        }
      }
    });
  }
  render() {
    return (
      <div className="row">
        <div className="inner">
          <h2>Total Points Against</h2>
          <canvas id="chartPA"></canvas>
        </div>
      </div>
    )
  }
}