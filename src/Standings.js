import React from 'react';

const Standings = ({teams}) => (
  <React.Fragment>
    <h2>Final Standings</h2>
    <ol className="standings">
      {teams.map(team => (
        <li key={team.id}>
          <span className="label">{team.place}<sup>{team.placeSuffix}</sup></span> {team.name} ({team.wins}-{team.losses})
        </li>
      ))}
    </ol>
  </React.Fragment>
);

export default Standings;