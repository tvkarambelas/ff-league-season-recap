import React from 'react';

function Standings({leagueData}) {
  const owners = leagueData.owners
  const lastPos = leagueData.size-1

  // utility functions
  const default_cmp = function(a, b) {
    if (a === b) return 0;
    return a < b ? -1 : 1;
  },
  getCmpFunc = function(primer) {
    var cmp = default_cmp;
    if (primer) {
      cmp = function(a, b) {
        return default_cmp(primer(a), primer(b));
      };
    }

    return function(a, b) {
      return -1 * cmp(a, b);
    };
  };

  function sortBy() {
    var fields = [],
        n_fields = arguments.length,
        field, name, cmp;

    // preprocess sorting options
    for (var i = 0; i < n_fields; i++) {
      field = arguments[i];
      if (typeof field === 'string') {
        name = field;
        cmp = default_cmp;
      }
      else {
        name = field.name;
        cmp = getCmpFunc(field.primer);
      }
      fields.push({
        name: name,
        cmp: cmp
      });
    }

    return function(A, B) {
      var name, cmp, result;
      for (var i = 0, l = n_fields; i < l; i++) {
        result = 0;
        field = fields[i];
        name = field.name;
        cmp = field.cmp;

        result = cmp(A[name], B[name]);
        if (result !== 0) break;
      }
      return result;
    }
  }

  const ownersSorted = owners.slice(0).sort(sortBy(
    {
      name: 'wins',
      primer: parseInt
    },
    {
      name: 'pointsFor',
      primer: parseInt
    }
  ));

  const ownersSortedPF = owners.slice(0).sort(sortBy(
    {
      name: 'pointsFor',
      primer: parseInt
    }
  ));

  const ownersSortedPA = owners.slice(0).sort(sortBy(
    {
      name: 'pointsAgainst',
      primer: parseInt
    }
  ));

  const ownersSortedPPP = owners.slice(0).sort(sortBy(
    {
      name: 'pointsPossiblePerc',
      primer: parseInt
    }
  ));
  
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
              <img src={'https://sleepercdn.com/avatars/thumbs/'+ownersSortedPF[0].avatar} alt="" className="avatar" /> {ownersSortedPF[0].teamName} ({ownersSortedPF[0].pointsFor} pts)
            </div>
          </div>  

          <div>
            <h3><span role="img" aria-label="">&#128169;</span>Lowest Scorer</h3>
            <div className="owner-block">
              <img src={'https://sleepercdn.com/avatars/thumbs/'+ownersSortedPF[lastPos].avatar} alt="" className="avatar" /> {ownersSortedPF[lastPos].teamName} ({ownersSortedPF[lastPos].pointsFor} pts)
            </div>
          </div>

          <div>
            <h3><span role="img" aria-label="">&#127808;</span>Best Luck</h3>
            <div className="desc">(least points against)</div>
            <div className="owner-block">
              <img src={'https://sleepercdn.com/avatars/thumbs/'+ownersSortedPA[lastPos].avatar} alt="" className="avatar" /> {ownersSortedPA[lastPos].teamName} ({ownersSortedPA[lastPos].pointsAgainst} pts)
            </div>
          </div>  

          <div>
            <h3><span role="img" aria-label="">&#129301;</span>Worst Luck</h3>
            <div className="desc">(most points against)</div>
            <div className="owner-block">
              <img src={'https://sleepercdn.com/avatars/thumbs/'+ownersSortedPA[0].avatar} alt="" className="avatar" /> {ownersSortedPA[0].teamName} ({ownersSortedPA[0].pointsAgainst} pts)
            </div>
          </div> 

          <div>
            <h3><span role="img" aria-label="">&#128293;</span>Best Manager</h3>
            <div className="desc">(highest percentage of possible points scored)</div>
            <div className="owner-block">
              <img src={'https://sleepercdn.com/avatars/thumbs/'+ownersSortedPPP[0].avatar} alt="" className="avatar" /> {ownersSortedPPP[0].teamName} ({ownersSortedPPP[0].pointsPossiblePerc}%)
            </div>
          </div>

          <div>
            <h3><span role="img" aria-label="">&#129300;</span>Worst Manager</h3>
            <div className="desc">(lowest percentage of possible points scored)</div>
            <div className="owner-block">
              <img src={'https://sleepercdn.com/avatars/thumbs/'+ownersSortedPPP[lastPos].avatar} alt="" className="avatar" /> {ownersSortedPPP[lastPos].teamName} ({ownersSortedPPP[lastPos].pointsPossiblePerc}%)
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Standings;