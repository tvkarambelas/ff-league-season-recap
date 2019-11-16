import React, {useState} from 'react';
import Standings from './Standings';
import PointsFor from './PointsFor';
import PointsAgainst from './PointsAgainst';
import PointsPossible from './PointsPossible';

function SeasonRecap() {
  const [leagueID, setLeagueID] = useState('')
  const [leagueData, setLeagueData] = useState('')

  async function getLeagueData(e,leagueID) {
    e.preventDefault();
    const apiBase = 'https://api.sleeper.app/v1/';
    
    let leagueDataResp = await fetch(apiBase+'league/'+leagueID);
    const leagueDataJSON = await leagueDataResp.json();

    let leagueRostersResp = await fetch(apiBase+'league/'+leagueID+'/rosters');
    const leagueRostersJSON = await leagueRostersResp.json();

    let ownersData = [];

    leagueRostersJSON.map(owner => (
      ownersData.push(
        {
          rosterID: owner.roster_id,
          ownerID: owner.owner_id,
          wins: owner.settings.wins,
          losses: owner.settings.losses,
          ties: owner.settings.ties,
          pointsFor: owner.settings.fpts + owner.settings.fpts_decimal,
          pointsAgainst: owner.settings.fpts_against + owner.settings.fpts_against_decimal,
          pointsPossible: owner.settings.ppts + owner.settings.ppts_decimal
        }
      )
    ))

    for (var i = 0; i < ownersData.length; i++) {
      let ownerUserDataResp = await fetch(apiBase+'user/'+ownersData[i].ownerID);
      const ownerUserDataJSON = await ownerUserDataResp.json();

      ownersData[i].avatar = ownerUserDataJSON.avatar;
      ownersData[i].userName = ownerUserDataJSON.username;
      ownersData[i].displayName = ownerUserDataJSON.display_name;
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
              <h1>{leagueData.name} - {leagueData.season} Season Recap</h1>
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
