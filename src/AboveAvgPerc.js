import React, {Component} from 'react';
import Chart from 'chart.js';

export default class AboveAvgPerc extends Component {

  componentDidMount() {
    const teams = this.props.teams;

    new Chart(document.getElementById("chartAboveAvgPerc"), {
      type: 'polarArea',
      data: {
        datasets: [{
          data: [
            teams[0].aboveAvgPerc,
            teams[1].aboveAvgPerc,
            teams[2].aboveAvgPerc,
            teams[3].aboveAvgPerc,
            teams[4].aboveAvgPerc,
            teams[5].aboveAvgPerc,
            teams[6].aboveAvgPerc,
            teams[7].aboveAvgPerc,
            teams[8].aboveAvgPerc,
            teams[9].aboveAvgPerc
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
          <h2>% of Games with Above Average Score</h2>
          <canvas id="chartAboveAvgPerc"></canvas>
        </div>
      </div>
    )
  }
}