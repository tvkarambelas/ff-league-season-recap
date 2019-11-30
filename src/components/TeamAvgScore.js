import React, {useEffect} from 'react';
import Chart from 'chart.js';

function TeamAvgScore({leagueData}) {
  useEffect(() => {
    const owners = leagueData.owners
    const ownerNames = []
    const ownerColors = []
    const ownerAvgScores = []

    for (var i = 0; i < owners.length; i++) {
      ownerNames.push(owners[i].teamName)
      ownerColors.push(owners[i].color)
      ownerAvgScores.push((owners[i].pointsFor/leagueData.currentWeek).toFixed(2))
    }

    new Chart(document.getElementById("chartAvgScore"), {
      type: 'polarArea',
      data: {
        datasets: [{
          data: ownerAvgScores,
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
        <h2>Team Average Score</h2>
        <canvas id="chartAvgScore"></canvas>
      </div>
    </div>
  )
}

export default TeamAvgScore;