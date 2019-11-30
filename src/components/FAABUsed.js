import React, {useEffect} from 'react';
import Chart from 'chart.js';

function FAABUsed({leagueData}) {
  useEffect(() => {
    const owners = leagueData.owners
    const ownerNames = []
    const ownerColors = []
    const ownerFAABUsed = []

    for (var i = 0; i < owners.length; i++) {
      ownerNames.push(owners[i].teamName)
      ownerColors.push(owners[i].color)
      ownerFAABUsed.push(owners[i].waiverBudgetUsed)
    }

    new Chart(document.getElementById("chartFAABUsed"), {
      type: 'doughnut',
      data: {
        datasets: [{
          data: ownerFAABUsed,
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
  }, [leagueData])  

  return (
    <div className="row">
      <div className="inner">
        <h2>FAAB Used (out of ${leagueData.waiverBudget})</h2>
        <canvas id="chartFAABUsed"></canvas>
      </div>
    </div>
  )
}

export default FAABUsed;