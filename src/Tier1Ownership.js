import React, {Component} from 'react';
import Chart from 'chart.js';

export default class Tier1Ownership extends Component {

  componentDidMount() {
    const teams = this.props.teams;

    new Chart(document.getElementById("chartTier1"), {
      type:"horizontalBar",
      data:{
        labels:[
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
        ],
        datasets:[
          {
            label: "QB",
            data:[
              teams[0].tier1_QB.length,
              teams[1].tier1_QB.length,
              teams[2].tier1_QB.length,
              teams[3].tier1_QB.length,
              teams[4].tier1_QB.length,
              teams[5].tier1_QB.length,
              teams[6].tier1_QB.length,
              teams[7].tier1_QB.length,
              teams[8].tier1_QB.length,
              teams[9].tier1_QB.length
            ],
            backgroundColor: "#e41a1c"
          },
          {
            label: "RB",
            data:[
              teams[0].tier1_RB.length,
              teams[1].tier1_RB.length,
              teams[2].tier1_RB.length,
              teams[3].tier1_RB.length,
              teams[4].tier1_RB.length,
              teams[5].tier1_RB.length,
              teams[6].tier1_RB.length,
              teams[7].tier1_RB.length,
              teams[8].tier1_RB.length,
              teams[9].tier1_RB.length
            ],
            backgroundColor: "#4daf4a"
          },
          {
            label: "WR",
            data:[
              teams[0].tier1_WR.length,
              teams[1].tier1_WR.length,
              teams[2].tier1_WR.length,
              teams[3].tier1_WR.length,
              teams[4].tier1_WR.length,
              teams[5].tier1_WR.length,
              teams[6].tier1_WR.length,
              teams[7].tier1_WR.length,
              teams[8].tier1_WR.length,
              teams[9].tier1_WR.length
            ],
            backgroundColor: "#377eb8"
          },
          {
            label: "TE",
            data:[
              teams[0].tier1_TE.length,
              teams[1].tier1_TE.length,
              teams[2].tier1_TE.length,
              teams[3].tier1_TE.length,
              teams[4].tier1_TE.length,
              teams[5].tier1_TE.length,
              teams[6].tier1_TE.length,
              teams[7].tier1_TE.length,
              teams[8].tier1_TE.length,
              teams[9].tier1_TE.length
            ],
            backgroundColor: "#ffff33"
          },
          {
            label: "D/ST",
            data:[
              teams[0].tier1_DST.length,
              teams[1].tier1_DST.length,
              teams[2].tier1_DST.length,
              teams[3].tier1_DST.length,
              teams[4].tier1_DST.length,
              teams[5].tier1_DST.length,
              teams[6].tier1_DST.length,
              teams[7].tier1_DST.length,
              teams[8].tier1_DST.length,
              teams[9].tier1_DST.length
            ],
            backgroundColor: "#984ea3"
          },
          {
            label: "K",
            data:[
              teams[0].tier1_K.length,
              teams[1].tier1_K.length,
              teams[2].tier1_K.length,
              teams[3].tier1_K.length,
              teams[4].tier1_K.length,
              teams[5].tier1_K.length,
              teams[6].tier1_K.length,
              teams[7].tier1_K.length,
              teams[8].tier1_K.length,
              teams[9].tier1_K.length
            ],
            backgroundColor: "#a65628"
          }
        ]
      },
      options: {
        scales: {
          xAxes: [{
            stacked: true
          }],
          yAxes: [{
            stacked: true
          }]
        }
      }
    });
  }
  render() {
    return (
      <div className="row">
        <div className="inner">
          <h2>Tier 1 Ownership</h2>
          <canvas id="chartTier1"></canvas>
        </div>
      </div>
    )
  }
}