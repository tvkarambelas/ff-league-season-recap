import React, {useEffect} from 'react';
import Chart from 'chart.js';

function PointsPossiblePerc({owners}) {
  useEffect(() => {
    const ownerNames = []
    const ownerColors = []
    const ownerPPPs = []

    for (var i = 0; i < owners.length; i++) {
      ownerNames.push(owners[i].teamName)
      ownerColors.push(owners[i].color)
      ownerPPPs.push(owners[i].pointsPossiblePerc)
    }

    new Chart(document.getElementById("chartPPP"), {
      type: 'polarArea',
      data: {
        datasets: [{
          data: ownerPPPs,
          backgroundColor: ownerColors,
        }],

        labels: ownerNames
      },
      options: {
        legend: {
          display: true,
          position: 'left'
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }, [owners])  

  return (
    <div className="row">
      <div className="inner">
        <h2>Percentage of Possible Points Scored</h2>
        <canvas id="chartPPP"></canvas>
      </div>
    </div>
  )
}

export default PointsPossiblePerc;