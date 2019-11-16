import React from 'react';
import Standings from './Standings';
import PointsFor from './PointsFor';
import PointsAgainst from './PointsAgainst';
import PointsPossible from './PointsPossible';

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
    pointsPossible: 1802
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
    pointsPossible: 1800.1
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
    pointsPossible: 1800.2
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
    pointsPossible: 1800.3
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
    pointsPossible: 1800.4
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
    pointsPossible: 1800.5
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
    pointsPossible: 1800.6
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
    pointsPossible: 1800.7
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
    pointsPossible: 1800.8
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
    pointsPossible: 1800.9
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
            <PointsPossible teams={teamsData} />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
