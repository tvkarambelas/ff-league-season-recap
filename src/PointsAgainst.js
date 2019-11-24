import React, {useEffect} from 'react';
import Chart from 'chart.js';

function PointsAgainst({owners}) {
  useEffect(() => {
    const ownerNames = []
    const ownerColors = []
    const ownerPAs = []

    for (var i = 0; i < owners.length; i++) {
      ownerNames.push(owners[i].teamName)
      ownerColors.push(owners[i].color)
      ownerPAs.push(owners[i].pointsAgainst)
    }

    new Chart(document.getElementById("chartPA"), {
      type: 'horizontalBar',
      data: {
        datasets: [{
          data: ownerPAs,
          backgroundColor: ownerColors,
        }],

        labels: ownerNames
      },
      options: {
        legend: {
          display: false
        }
      }
    });
  }, [owners])  

  return (
    <div className="row">
      <div className="inner">
        <h2>Total Points Against</h2>
        <canvas id="chartPA"></canvas>
      </div>
    </div>
  )
}

export default PointsAgainst;