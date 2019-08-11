import React, {Component} from 'react';
import Chart from 'chart.js';

export default class Acquisitions extends Component {

  componentDidMount() {
    const teams = this.props.teams;

    new Chart(document.getElementById("chartAcq"), {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [
            teams[0].acquisitions,
            teams[1].acquisitions,
            teams[2].acquisitions,
            teams[3].acquisitions,
            teams[4].acquisitions,
            teams[5].acquisitions,
            teams[6].acquisitions,
            teams[7].acquisitions,
            teams[8].acquisitions,
            teams[9].acquisitions
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
          display: true,
          position: 'left'
        },
        responsive: true
      }
    });
  }
  render() {
    return (
      <div className="row">
        <div className="inner">
          <h2>Player Acquisitions</h2>
          <canvas id="chartAcq"></canvas>
        </div>
      </div>
    )
  }
}