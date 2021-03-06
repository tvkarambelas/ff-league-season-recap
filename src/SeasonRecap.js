import React, {useState} from 'react';
import Standings from './components/Standings';
import PointsFor from './components/PointsFor';
import PointsPossible from './components/PointsPossible';
import PointsPossiblePerc from './components/PointsPossiblePerc';
import PointsAgainst from './components/PointsAgainst';
import TeamAvgScore from './components/TeamAvgScore';
import FAABUsed from './components/FAABUsed';

function SeasonRecap(props) {
  const [leagueID, setLeagueID] = useState('')
  const [leagueData, setLeagueData] = useState('')
  const [appStatus, setAppStatus] = useState('loading')

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
    if (e) {
      e.preventDefault();
    }
    
    const apiBase = 'https://api.sleeper.app/v1/';
    
    // get league data
    let leagueDataResp = await fetch(apiBase+'league/'+leagueID);
    const leagueDataJSON = await leagueDataResp.json();

    if (leagueDataJSON) {
      console.log(leagueDataJSON);

      let standings = [];

      // get winners bracket
      let leagueWinnersResp = await fetch(apiBase+'league/'+leagueID+'/winners_bracket');
      const leagueWinnersJSON = await leagueWinnersResp.json();
      console.log('winners bracket');
      console.log(leagueWinnersJSON);

      // get losers bracket
      let leagueLosersResp = await fetch(apiBase+'league/'+leagueID+'/losers_bracket');
      const leagueLosersJSON = await leagueLosersResp.json();
      console.log('losers bracket');
      console.log(leagueLosersJSON);

      leagueLosersJSON.filter(function(match) {
        if (match.p) return match;
      }).map((match,idx) => (
        standings.push(
          {
            position: leagueDataJSON.total_rosters - match.p + 1,
            rosterID: match.w
          }
        ),

        standings.push(
          {
            position: leagueDataJSON.total_rosters - match.p,
            rosterID: match.l
          }
        )
      ))

      leagueWinnersJSON.filter(function(match) {
        if (match.p) return match;
      }).map((match,idx) => (
        standings.push(
          {
            position: match.p,
            rosterID: match.w
          }
        ),

        standings.push(
          {
            position: match.p + 1,
            rosterID: match.l
          }
        )
      ))

      console.log('standings');
      console.log(standings);

      // get rosters data
      let leagueRostersResp = await fetch(apiBase+'league/'+leagueID+'/rosters');
      const leagueRostersJSON = await leagueRostersResp.json();
      console.log('league rosters');
      console.log(leagueRostersJSON);

      // get users data
      let leagueUsersResp = await fetch(apiBase+'league/'+leagueID+'/users');
      const leagueUsersJSON = await leagueUsersResp.json();
      console.log('league users');
      console.log(leagueUsersJSON);

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
            pointsFor: parseInt(owner.settings.fpts + '.' + owner.settings.fpts_decimal),
            pointsAgainst: parseInt(owner.settings.fpts_against + '.' + owner.settings.fpts_against_decimal),
            pointsPossible: parseInt(owner.settings.ppts + '.' + owner.settings.ppts_decimal),
            waiverBudgetUsed: owner.settings.waiver_budget_used,
            pointsPossiblePerc: ((parseInt(owner.settings.fpts + '.' + owner.settings.fpts_decimal) / parseInt(owner.settings.ppts + '.' + owner.settings.ppts_decimal) * 100).toFixed(2))
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

        const standingsData = standings.filter(obj => {
          return obj.rosterID === ownersData[i].rosterID
        })

        const userName = newOwnerData[0].display_name;
        const teamName = newOwnerData[0].metadata.team_name || userName;

        ownersData[i].avatar = newOwnerData[0].avatar;
        ownersData[i].userName = userName;
        ownersData[i].teamName = teamName;
        ownersData[i].place = standingsData[0].position;
      }

      setLeagueData(
        {
          'name':leagueDataJSON.name,
          'season':leagueDataJSON.season,
          'avatar':leagueDataJSON.avatar,
          'size':leagueDataJSON.total_rosters,
          'currentWeek':leagueDataJSON.settings.leg,
          'waiverType':leagueDataJSON.settings.waiver_type,
          'waiverBudget':leagueDataJSON.settings.waiver_budget,
          'owners': ownersData
        }
      );

      setAppStatus('loaded');
    }
    else {
      setAppStatus('failed');
    }
  }

  if (props.match.params.id && !leagueID) {
    setLeagueID(props.match.params.id);
    getLeagueData(null, props.match.params.id);
  }

  return (
    <>
      {appStatus === 'loading' ? 
        <div id="loading" className="full-screen">
          <div className="inner">
            <div className="loader"></div>
          </div>
        </div> 
        : ''
      }

      {appStatus === 'failed' ? 
        <div id="failed" className="full-screen">
          <div className="inner">
            <span role="img" aria-label="" className="emoji">&#129300;</span>
            <p>Whoops, that league ID didn't work!</p>
            <p>You can <a href="javascript:window.location.href=window.location.href">try again</a> or <a href="/">go back and enter a new league ID</a>.</p>
            <p>Your league ID: <span className="highlight">{leagueID}</span></p>
          </div>
        </div> 
        : ''
      }
      
      <header className="row">
        <div className="inner">
          <div className="top">
            <div className="site-title">
              {leagueData.avatar ? 
                <img src={'https://sleepercdn.com/avatars/thumbs/'+leagueData.avatar} alt="" className="avatar" />
                : ''
              }
              {leagueData ? 
                <h1>{leagueData.name} - {leagueData.season} Season Recap</h1>
                : ''
              }
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="row">
          <div className="inner">
            {leagueData ? (
                <>
                  <Standings leagueData={leagueData} />
                  <PointsFor owners={leagueData.owners} />
                  <PointsPossible owners={leagueData.owners} />
                  <PointsPossiblePerc owners={leagueData.owners} />
                  <PointsAgainst owners={leagueData.owners} />
                  <TeamAvgScore leagueData={leagueData} />
                  
                  {leagueData.waiverType === 2 ? 
                    <FAABUsed leagueData={leagueData} />
                    : ''
                  }
                </>
              ) 
              : ''
            }
          </div>
        </div>
      </main>
    </>
  )
}

export default SeasonRecap;