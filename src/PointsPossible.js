import React, {useEffect} from 'react';
import Chart from 'chart.js';

function PointsPossible({owners}) {
  useEffect(() => {
    const ownerNames = []
    const ownerColors = []
    const ownerPPs = []

    for (var i = 0; i < owners.length; i++) {
      ownerNames.push(owners[i].teamName)
      ownerColors.push(owners[i].color)
      ownerPPs.push(owners[i].pointsPossible)
    }

    new Chart(document.getElementById("chartPP"), {
      type: 'horizontalBar',
      data: {
        datasets: [{
          data: ownerPPs,
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
        <h2>Total Points Possible</h2>
        <canvas id="chartPP"></canvas>
      </div>
    </div>
  )
}

export default PointsPossible;