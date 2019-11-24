import React, {useState} from 'react';
import Standings from './components/Standings';
import PointsFor from './components/PointsFor';
import PointsPossible from './components/PointsPossible';
import PointsAgainst from './components/PointsAgainst';

function SeasonRecap() {
  const [leagueID, setLeagueID] = useState('')
  const [leagueData, setLeagueData] = useState('')

  const ownerColors = [
    '#a6cee3',
    '#1f78b4',
    '#b2df8a',
    '#33a02c',
    '#fb9a99',
    '#e31a1c',
    '#fdbf6f',
    '#ff7f00',
    '#cab2d6',
    '#6a3d9a'
  ]

  // Material color scheme
  // '#FF7043',
  // '#E64A19',
  // '#FFCA28',
  // '#FFA000',
  // '#66BB6A',
  // '#388E3C',
  // '#26A69A',
  // '#00796B',
  // '#26C6DA',
  // '#0097A7',
  // '#42A5F5',
  // '#1976D2',
  // '#7E57C2',
  // '#512DA8',
  // '#EC407A',
  // '#AD1457',
  // '#EF5350',
  // '#D32F2F',
  // '#8D6E63',
  // '#5D4037',
  // '#78909C',
  // '#455A64'

  async function getLeagueData(e,leagueID) {
    e.preventDefault();
    const apiBase = 'https://api.sleeper.app/v1/';
    
    // get league data
    let leagueDataResp = await fetch(apiBase+'league/'+leagueID);
    const leagueDataJSON = await leagueDataResp.json();

    // get rosters data
    let leagueRostersResp = await fetch(apiBase+'league/'+leagueID+'/rosters');
    const leagueRostersJSON = await leagueRostersResp.json();

    // get users data
    let leagueUsersResp = await fetch(apiBase+'league/'+leagueID+'/users');
    const leagueUsersJSON = await leagueUsersResp.json();

    // pull out data we want from rosters
    let ownersData = [];
    leagueRostersJSON.map((owner,idx) => (
      ownersData.push(
        {
          color: ownerColors[idx],
          rosterID: owner.roster_id,
          ownerID: owner.owner_id,
          wins: owner.settings.wins,
          losses: owner.settings.losses,
          ties: owner.settings.ties,
          pointsFor: owner.settings.fpts + '.' + owner.settings.fpts_decimal,
          pointsAgainst: owner.settings.fpts_against + '.' + owner.settings.fpts_against_decimal,
          pointsPossible: owner.settings.ppts + '.' + owner.settings.ppts_decimal
        }
      )
    ))

    // get additional user data that isn't provided in rosters endpoint
    for (var i = 0; i < ownersData.length; i++) {
      const userID = ownersData[i].ownerID;

      // search for corresponding owner
      const newOwnerData = leagueUsersJSON.filter(obj => {
        return obj.user_id === userID
      })

      const userName = newOwnerData[0].display_name;
      const teamName = newOwnerData[0].metadata.team_name || userName;

      ownersData[i].avatar = newOwnerData[0].avatar;
      ownersData[i].userName = userName;
      ownersData[i].teamName = teamName;
    }

    setLeagueData(
      {
       'name':leagueDataJSON.name,
       'season':leagueDataJSON.season,
       'avatar':leagueDataJSON.avatar,
       'size':leagueDataJSON.total_rosters,
       'owners': ownersData
      }
    );
  }

  return (
    <>
      <header className="row">
        <div className="inner">
          <div className="top">
            <div className="site-title">Sleeper FF League Season Recap</div>
          </div>
        </div>
      </header>

      <main>
        <div className="row">
          <div className="inner">
            <form>
              <input
                id="leagueID"
                type="text"
                placeholder="Sleeper League ID"
                onChange={e => setLeagueID(e.target.value)}
              />
              <button 
                type="button"
                id="submit"
                onClick={e => getLeagueData(e,leagueID)}
              >Submit</button>
            </form>

            {leagueData ? (
              <>
                <div id="league-header">
                  {leagueData.avatar ? 
                    <img src={'https://sleepercdn.com/avatars/thumbs/'+leagueData.avatar} alt="" className="avatar" />
                    : ''
                  }
                  <h1>{leagueData.name} - {leagueData.season} Season Recap</h1>
                </div>
                
                <Standings owners={leagueData.owners} />
                <PointsFor owners={leagueData.owners} />
                <PointsPossible owners={leagueData.owners} />
                <PointsAgainst owners={leagueData.owners} />
              </>
            ) : (
              <div className="no-results">League not found.</div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export default SeasonRecap;
