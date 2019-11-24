import React, {useEffect} from 'react';
import Chart from 'chart.js';

function PointsFor({owners}) {
  useEffect(() => {
    const ownerNames = []
    const ownerColors = []
    const ownerPFs = []

    for (var i = 0; i < owners.length; i++) {
      ownerNames.push(owners[i].teamName)
      ownerColors.push(owners[i].color)
      ownerPFs.push(owners[i].pointsFor)
    }

    new Chart(document.getElementById("chartPF"), {
      type: 'horizontalBar',
      data: {
        datasets: [{
          data: ownerPFs,
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
        <h2>Total Points For</h2>
        <canvas id="chartPF"></canvas>
      </div>
    </div>
  )
}

export default PointsFor;