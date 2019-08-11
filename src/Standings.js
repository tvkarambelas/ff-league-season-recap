import React, {Component} from 'react';

const standings = [
  { id: 1,  wins: 9, losses: 4,  place: '1st',  name: 'Team 1' },
  { id: 2,  wins: 9, losses: 4,  place: '2nd',  name: 'Team 2' },
  { id: 3,  wins: 9, losses: 4,  place: '3rd',  name: 'Team 3' },
  { id: 4,  wins: 9, losses: 4,  place: '4th',  name: 'Team 4' },
  { id: 5,  wins: 8, losses: 5,  place: '5th',  name: 'Team 5' },
  { id: 6,  wins: 6, losses: 7,  place: '6th',  name: 'Team 6' },
  { id: 7,  wins: 6, losses: 7,  place: '7th',  name: 'Team 7' },
  { id: 8,  wins: 6, losses: 7,  place: '8th',  name: 'Team 8' },
  { id: 9,  wins: 3, losses: 10, place: '9th',  name: 'Team 9'  },
  { id: 10, wins: 0, losses: 13, place: '10th', name: 'Team 10'  },
];

class Standings extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Final Standings</h2>
        <ol class="standings">
          {standings.map(team => (
            <li key={team.id}>
              <span class="label">{team.place}</span> {team.name} ({team.wins}-{team.losses})
            </li>
          ))}
        </ol>
      </React.Fragment>
    );
  }
}

export default Standings;