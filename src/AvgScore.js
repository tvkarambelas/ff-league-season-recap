import React, {Component} from 'react';
import Chart from 'chart.js';

export default class PointsFor extends Component {

  componentDidMount() {
    const teams = this.props.teams;

    new Chart(document.getElementById("chartAvgScore"), {
      type: 'horizontalBar',
      data: {
        datasets: [{
          data: [
            teams[0].avgScore,
            teams[1].avgScore,
            teams[2].avgScore,
            teams[3].avgScore,
            teams[4].avgScore,
            teams[5].avgScore,
            teams[6].avgScore,
            teams[7].avgScore,
            teams[8].avgScore,
            teams[9].avgScore
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
          <h2>Team Average Score</h2>
          <canvas id="chartAvgScore"></canvas>
        </div>
      </div>
    )
  }
}