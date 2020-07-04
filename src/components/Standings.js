import React from 'react';

function Standings({leagueData}) {
  const owners = leagueData.owners
  const lastPos = leagueData.size-1

  const ownersSorted = owners.slice(0).sort(function(a, b){
    return a.place-b.place
  });

  const ownersSortedPF = owners.slice(0).sort(function(a, b){
    return a.pointsFor-b.pointsFor
  });

  const ownersSortedPA = owners.slice(0).sort(function(a, b){
    return a.pointsAgainst-b.pointsAgainst
  });

  const ownersSortedPPP = owners.slice(0).sort(function(a, b){
    return a.pointsPossiblePerc-b.pointsPossiblePerc
  });

  // awards
  const highPF = ownersSortedPF[lastPos]
  const lowPF = ownersSortedPF[0]
  const highPA = ownersSortedPA[lastPos]
  const lowPA = ownersSortedPA[0]
  const highPPP = ownersSortedPPP[lastPos]
  const lowPPP = ownersSortedPPP[0]
  
  return (
    <>
      <h2>Standings</h2>
      <ol className="standings">
        {ownersSorted.map((owner,idx) => (          
          <li data-place={idx+1} key={owner.ownerID} className="owner-block">
            {idx < 4 ?
              <>
                <span className="fas fa-trophy"></span>
              </>
              :
              ''
            }
            <span className="label">
              {idx+1}
              <sup>
                {idx+1 === 1 ? 'st':''}
                {idx+1 === 2 ? 'nd':''}
                {idx+1 !== 1 && idx+1 !== 2 ? 'th':''}
              </sup>
            </span> <img src={'https://sleepercdn.com/avatars/thumbs/'+owner.avatar} alt="" className="avatar" /> {owner.teamName} ({owner.wins}-{owner.losses}{owner.ties?'-'+owner.ties:''})
          </li>
        ))}
      </ol>

      <div id="awards" className="row">
        <h2>Awards</h2>

        <div className="cols-2">
          <div>
            <h3><span role="img" aria-label="">&#128640;</span> Highest Scorer</h3>
            <div className="owner-block">
              <img src={'https://sleepercdn.com/avatars/thumbs/'+highPF.avatar} alt="" className="avatar" /> {highPF.teamName} ({highPF.pointsFor} pts)
            </div>
          </div>  

          <div>
            <h3><span role="img" aria-label="">&#128169;</span>Lowest Scorer</h3>
            <div className="owner-block">
              <img src={'https://sleepercdn.com/avatars/thumbs/'+lowPF.avatar} alt="" className="avatar" /> {lowPF.teamName} ({lowPF.pointsFor} pts)
            </div>
          </div>

          <div>
            <h3><span role="img" aria-label="">&#127808;</span>Best Luck</h3>
            <div className="desc">(least points against)</div>
            <div className="owner-block">
              <img src={'https://sleepercdn.com/avatars/thumbs/'+lowPA.avatar} alt="" className="avatar" /> {lowPA.teamName} ({lowPA.pointsAgainst} pts)
            </div>
          </div>  

          <div>
            <h3><span role="img" aria-label="">&#129301;</span>Worst Luck</h3>
            <div className="desc">(most points against)</div>
            <div className="owner-block">
              <img src={'https://sleepercdn.com/avatars/thumbs/'+highPA.avatar} alt="" className="avatar" /> {highPA.teamName} ({highPA.pointsAgainst} pts)
            </div>
          </div> 

          <div>
            <h3><span role="img" aria-label="">&#128293;</span>Best Manager</h3>
            <div className="desc">(highest percentage of possible points scored)</div>
            <div className="owner-block">
              <img src={'https://sleepercdn.com/avatars/thumbs/'+highPPP.avatar} alt="" className="avatar" /> {highPPP.teamName} ({highPPP.pointsPossiblePerc}%)
            </div>
          </div>

          <div>
            <h3><span role="img" aria-label="">&#129300;</span>Worst Manager</h3>
            <div className="desc">(lowest percentage of possible points scored)</div>
            <div className="owner-block">
              <img src={'https://sleepercdn.com/avatars/thumbs/'+lowPPP.avatar} alt="" className="avatar" /> {lowPPP.teamName} ({lowPPP.pointsPossiblePerc}%)
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Standings;