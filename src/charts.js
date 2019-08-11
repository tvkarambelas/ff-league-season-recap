

var chartPA = new Chart(document.getElementById("chartPA"), {
  type: 'horizontalBar',
  data: {
    datasets: [{
      data: [
        teams.team1.pointsAgainst,
        teams.team2.pointsAgainst,
        teams.team3.pointsAgainst,
        teams.team4.pointsAgainst,
        teams.team5.pointsAgainst,
        teams.team6.pointsAgainst,
        teams.team7.pointsAgainst,
        teams.team8.pointsAgainst,
        teams.team9.pointsAgainst,
        teams.team10.pointsAgainst
      ],
      backgroundColor: [
        teams.team1.color,
        teams.team2.color,
        teams.team3.color,
        teams.team4.color,
        teams.team5.color,
        teams.team6.color,
        teams.team7.color,
        teams.team8.color,
        teams.team9.color,
        teams.team10.color
      ],
    }],

    labels: [
      teams.team1.name,
      teams.team2.name,
      teams.team3.name,
      teams.team4.name,
      teams.team5.name,
      teams.team6.name,
      teams.team7.name,
      teams.team8.name,
      teams.team9.name,
      teams.team10.name
    ]
  },
  options: {
    legend: {
      display: false
    }
  }
});

var chartAvgScore = new Chart(document.getElementById("chartAvgScore"), {
  type: 'horizontalBar',
  data: {
    datasets: [{
      data: [
        teams.team1.avgScore,
        teams.team2.avgScore,
        teams.team3.avgScore,
        teams.team4.avgScore,
        teams.team5.avgScore,
        teams.team6.avgScore,
        teams.team7.avgScore,
        teams.team8.avgScore,
        teams.team9.avgScore,
        teams.team10.avgScore
      ],
      backgroundColor: [
        teams.team1.color,
        teams.team2.color,
        teams.team3.color,
        teams.team4.color,
        teams.team5.color,
        teams.team6.color,
        teams.team7.color,
        teams.team8.color,
        teams.team9.color,
        teams.team10.color
      ],
    }],

    labels: [
      teams.team1.name,
      teams.team2.name,
      teams.team3.name,
      teams.team4.name,
      teams.team5.name,
      teams.team6.name,
      teams.team7.name,
      teams.team8.name,
      teams.team9.name,
      teams.team10.name
    ]
  },
  options: {
    legend: {
      display: false
    }
  }
});

// doesn't pull from array
var chartHighestScore = new Chart(document.getElementById("chartHighestScore"), {
  type: 'horizontalBar',
  data: {
    datasets: [{
      data: [
        '192.6',
        '184.3',
        '183.9',
        '181.8',
        '179.8',
        '173.2',
        '173.1',
        '163.7',
        '163.2',
        '162.1'
      ],
      backgroundColor: [
        teams.team5.color,
        teams.team10.color,
        teams.team7.color,
        teams.team1.color,
        teams.team2.color,
        teams.team5.color,
        teams.team8.color,
        teams.team10.color,
        teams.team8.color,
        teams.team7.color
      ],
    }],

    labels: [
      teams.team5.name + ' - Week 10',
      teams.team10.name + ' - Week 8',
      teams.team7.name + ' - Week 4',
      teams.team1.name + ' - Week 11',
      teams.team2.name + ' - Week 5',
      teams.team5.name + ' - Week 8',
      teams.team8.name + ' - Week 13',
      teams.team10.name + ' - Week 12',
      teams.team8.name + ' - Week 2',
      teams.team7.name + ' - Week 7'
    ]
  },
  options: {
    legend: {
      display: false
    }
  }
});

var chartAboveAvgPerc = new Chart(document.getElementById("chartAboveAvgPerc"), {
  type: 'polarArea',
  data: {
    datasets: [{
      data: [
        teams.team1.aboveAvgPerc,
        teams.team2.aboveAvgPerc,
        teams.team3.aboveAvgPerc,
        teams.team4.aboveAvgPerc,
        teams.team5.aboveAvgPerc,
        teams.team6.aboveAvgPerc,
        teams.team7.aboveAvgPerc,
        teams.team8.aboveAvgPerc,
        teams.team9.aboveAvgPerc,
        teams.team10.aboveAvgPerc
      ],
      backgroundColor: [
        teams.team1.color,
        teams.team2.color,
        teams.team3.color,
        teams.team4.color,
        teams.team5.color,
        teams.team6.color,
        teams.team7.color,
        teams.team8.color,
        teams.team9.color,
        teams.team10.color
      ],
    }],

    labels: [
      teams.team1.name,
      teams.team2.name,
      teams.team3.name,
      teams.team4.name,
      teams.team5.name,
      teams.team6.name,
      teams.team7.name,
      teams.team8.name,
      teams.team9.name,
      teams.team10.name
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

var chartAcq = new Chart(document.getElementById("chartAcq"), {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [
          teams.team1.acquisitions,
          teams.team2.acquisitions,
          teams.team3.acquisitions,
          teams.team4.acquisitions,
          teams.team5.acquisitions,
          teams.team6.acquisitions,
          teams.team7.acquisitions,
          teams.team8.acquisitions,
          teams.team9.acquisitions,
          teams.team10.acquisitions
        ],
        backgroundColor: [
          teams.team1.color,
          teams.team2.color,
          teams.team3.color,
          teams.team4.color,
          teams.team5.color,
          teams.team6.color,
          teams.team7.color,
          teams.team8.color,
          teams.team9.color,
          teams.team10.color
        ],
      }],

      labels: [
        teams.team1.name,
        teams.team2.name,
        teams.team3.name,
        teams.team4.name,
        teams.team5.name,
        teams.team6.name,
        teams.team7.name,
        teams.team8.name,
        teams.team9.name,
        teams.team10.name
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

var chartTier1 = new Chart(document.getElementById("chartTier1"),{
  type:"horizontalBar",
  data:{
    labels:[
      teams.team1.name,
      teams.team2.name,
      teams.team3.name,
      teams.team4.name,
      teams.team5.name,
      teams.team6.name,
      teams.team7.name,
      teams.team8.name,
      teams.team9.name,
      teams.team10.name
    ],
    datasets:[
      {
        label: "QB",
        data:[
          teams.team1.tier1_QB.length,
          teams.team2.tier1_QB.length,
          teams.team3.tier1_QB.length,
          teams.team4.tier1_QB.length,
          teams.team5.tier1_QB.length,
          teams.team6.tier1_QB.length,
          teams.team7.tier1_QB.length,
          teams.team8.tier1_QB.length,
          teams.team9.tier1_QB.length,
          teams.team10.tier1_QB.length
        ],
        backgroundColor: "#e41a1c"
      },
      {
        label: "RB",
        data:[
          teams.team1.tier1_RB.length,
          teams.team2.tier1_RB.length,
          teams.team3.tier1_RB.length,
          teams.team4.tier1_RB.length,
          teams.team5.tier1_RB.length,
          teams.team6.tier1_RB.length,
          teams.team7.tier1_RB.length,
          teams.team8.tier1_RB.length,
          teams.team9.tier1_RB.length,
          teams.team10.tier1_RB.length
        ],
        backgroundColor: "#4daf4a"
      },
      {
        label: "WR",
        data:[
          teams.team1.tier1_WR.length,
          teams.team2.tier1_WR.length,
          teams.team3.tier1_WR.length,
          teams.team4.tier1_WR.length,
          teams.team5.tier1_WR.length,
          teams.team6.tier1_WR.length,
          teams.team7.tier1_WR.length,
          teams.team8.tier1_WR.length,
          teams.team9.tier1_WR.length,
          teams.team10.tier1_WR.length
        ],
        backgroundColor: "#377eb8"
      },
      {
        label: "TE",
        data:[
          teams.team1.tier1_TE.length,
          teams.team2.tier1_TE.length,
          teams.team3.tier1_TE.length,
          teams.team4.tier1_TE.length,
          teams.team5.tier1_TE.length,
          teams.team6.tier1_TE.length,
          teams.team7.tier1_TE.length,
          teams.team8.tier1_TE.length,
          teams.team9.tier1_TE.length,
          teams.team10.tier1_TE.length
        ],
        backgroundColor: "#ffff33"
      },
      {
        label: "D/ST",
        data:[
          teams.team1.tier1_DST.length,
          teams.team2.tier1_DST.length,
          teams.team3.tier1_DST.length,
          teams.team4.tier1_DST.length,
          teams.team5.tier1_DST.length,
          teams.team6.tier1_DST.length,
          teams.team7.tier1_DST.length,
          teams.team8.tier1_DST.length,
          teams.team9.tier1_DST.length,
          teams.team10.tier1_DST.length
        ],
        backgroundColor: "#984ea3"
      },
      {
        label: "K",
        data:[
          teams.team1.tier1_K.length,
          teams.team2.tier1_K.length,
          teams.team3.tier1_K.length,
          teams.team4.tier1_K.length,
          teams.team5.tier1_K.length,
          teams.team6.tier1_K.length,
          teams.team7.tier1_K.length,
          teams.team8.tier1_K.length,
          teams.team9.tier1_K.length,
          teams.team10.tier1_K.length
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
