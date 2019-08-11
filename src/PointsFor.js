import React, {Component} from 'react';
import Chart from 'chart.js';

export default class PointsFor extends Component {

  componentDidMount() {
    const teams = this.props.teams;

    new Chart(document.getElementById("chartPF"), {
      type: 'horizontalBar',
      data: {
        datasets: [{
          data: [
            teams[0].pointsFor,
            teams[1].pointsFor,
            teams[2].pointsFor,
            teams[3].pointsFor,
            teams[4].pointsFor,
            teams[5].pointsFor,
            teams[6].pointsFor,
            teams[7].pointsFor,
            teams[8].pointsFor,
            teams[9].pointsFor
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
          <h2>Total Points For</h2>
          <canvas id="chartPF"></canvas>
        </div>
      </div>
    )
  }
}