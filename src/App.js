import React from 'react';
import Standings from './Standings';
import PointsFor from './PointsFor';
import PointsAgainst from './PointsAgainst';
import AvgScore from './AvgScore';
import AboveAvgPerc from './AboveAvgPerc';
import Acquisitions from './Acquisitions';
import Tier1Ownership from './Tier1Ownership';

const leagueName = 'Demo League';
const season = '2018';

const teamsData = [
  {
    id: 1,
    name: 'Team 1',
    color: '#a6cee3',
    place: 5,
    placeSuffix: 'th',
    wins: 8,
    losses: 5,
    pointsFor: 1702.0,
    pointsAgainst: 1631.4,
    avgScore: 131.0,
    acquisitions: 40,
    aboveAvgPerc: 54,
    tier1_QB: [8],
    tier1_RB: [],
    tier1_WR: [3,4,11],
    tier1_TE: [3,11],
    tier1_DST: [1],
    tier1_K: [5]
  },
  {
    id: 2,
    name: 'Team 2',
    color: '#1f78b4',
    place: 7,
    placeSuffix: 'th',
    wins: 6,
    losses: 7,
    pointsFor: 1715.4,
    pointsAgainst: 1654.1,
    avgScore: 132.0,
    acquisitions: 5,
    aboveAvgPerc: 62,
    tier1_QB: [3],
    tier1_RB: [3],
    tier1_WR: [1],
    tier1_TE: [],
    tier1_DST: [4],
    tier1_K: []
  },
  {
    id: 3,
    name: 'Team 3',
    color: '#b2df8a',
    place: 9,
    placeSuffix: 'th',
    wins: 3,
    losses: 10,
    pointsFor: 1614.7,
    pointsAgainst: 1746.7,
    avgScore: 124.2,
    acquisitions: 5,
    aboveAvgPerc: 54,
    tier1_QB: [11,12],
    tier1_RB: [1],
    tier1_WR: [9],
    tier1_TE: [7],
    tier1_DST: [10],
    tier1_K: 0
  },
  {
    id: 4,
    name: 'Team 4',
    color: '#33a02c',
    place: 8,
    placeSuffix: 'th',
    wins: 6,
    losses: 7,
    pointsFor: 1513.1,
    pointsAgainst: 1610.4,
    avgScore: 116.4,
    acquisitions: 17,
    aboveAvgPerc: 38,
    tier1_QB: [2,7],
    tier1_RB: [9],
    tier1_WR: [8],
    tier1_TE: [],
    tier1_DST: [7,8,12],
    tier1_K: [4,10]
  },
  {
    id: 5,
    name: 'Team 5',
    color: '#fb9a99',
    place: 2,
    placeSuffix: 'nd',
    wins: 9,
    losses: 4,
    pointsFor: 1825.7,
    pointsAgainst: 1553.6,
    avgScore: 140.4,
    acquisitions: 18,
    aboveAvgPerc: 69,
    tier1_QB: [5,9],
    tier1_RB: [10,11],
    tier1_WR: [5,12],
    tier1_TE: [2],
    tier1_DST: [6,9],
    tier1_K: [2]
  },
  {
    id: 6,
    name: 'Team 6',
    color: '#e31a1c',
    place: 1,
    placeSuffix: 'st',
    wins: 9,
    losses: 4,
    pointsFor: 1731.4,
    pointsAgainst: 1522.3,
    avgScore: 133.2,
    acquisitions: 4,
    aboveAvgPerc: 77,
    tier1_QB: [1],
    tier1_RB: [4],
    tier1_WR: [10],
    tier1_TE: [5],
    tier1_DST: [3],
    tier1_K: []
  },
  {
    id: 7,
    name: 'Team 7',
    color: '#fdbf6f',
    place: 3,
    placeSuffix: 'rd',
    wins: 9,
    losses: 4,
    pointsFor: 1706.9,
    pointsAgainst: 1578.5,
    avgScore: 131.3,
    acquisitions: 12,
    aboveAvgPerc: 62,
    tier1_QB: [6],
    tier1_RB: [6,8],
    tier1_WR: [2],
    tier1_TE: [8,12],
    tier1_DST: [5,11],
    tier1_K: []
  },
  {
    id: 8,
    name: 'Team 8',
    color: '#ff7f00',
    place: 6,
    placeSuffix: 'th',
    wins: 6,
    losses: 7,
    pointsFor: 1740.5,
    pointsAgainst: 1773.4,
    avgScore: 133.9,
    acquisitions: 5,
    aboveAvgPerc: 62,
    tier1_QB: [],
    tier1_RB: [5],
    tier1_WR: [6],
    tier1_TE: [1,6],
    tier1_DST: [],
    tier1_K: [6,8]
  },
  {
    id: 9,
    name: 'Team 9',
    color: '#cab2d6',
    place: 10,
    placeSuffix: 'th',
    wins: 0,
    losses: 13,
    pointsFor: 1115.2,
    pointsAgainst: 1835.7,
    avgScore: 85.8,
    acquisitions: 2,
    aboveAvgPerc: 8,
    tier1_QB: [10],
    tier1_RB: [],
    tier1_WR: [],
    tier1_TE: [10],
    tier1_DST: [2],
    tier1_K: [7]
  },
  {
    id: 10,
    name: 'Team 10',
    color: '#6a3d9a',
    place: 4,
    placeSuffix: 'th',
    wins: 9,
    losses: 4,
    pointsFor: 1688.6,
    pointsAgainst: 1447.3,
    avgScore: 129.9,
    acquisitions: 15,
    aboveAvgPerc: 46,
    tier1_QB: [4],
    tier1_RB: [7,12],
    tier1_WR: [7],
    tier1_TE: [4],
    tier1_DST: [],
    tier1_K: [12]
  }
];

function compareTeamPlaces(a, b) {
  const placeA = a.place;
  const placeB = b.place;

  let comparison = 0;
  if (placeA > placeB) {
    comparison = 1;
  } else if (placeA < placeB) {
    comparison = -1;
  }
  return comparison;
}

function sortTeams(arr) {
  const teamsDataSorted = arr.concat();
  return teamsDataSorted.sort(compareTeamPlaces);
}

function App() {
  return (
    <React.Fragment>
      <header className="row">
        <div className="inner">
          <div className="top">
            <div className="site-title">{leagueName}</div>
          </div>
        </div>
      </header>

      <main>
        <div className="row">
          <div className="inner">
            <h1>{season} Season Recap</h1>

            <Standings teams={sortTeams(teamsData)} />
            <PointsFor teams={teamsData} />
            <PointsAgainst teams={teamsData} />
            <AvgScore teams={teamsData} />
            <AboveAvgPerc teams={teamsData} />
            <Acquisitions teams={teamsData} />
            <Tier1Ownership teams={teamsData} />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
