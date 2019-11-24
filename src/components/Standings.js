import React from 'react';

function Standings({owners}) {
  // utility functions
  var default_cmp = function(a, b) {
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
  
  return (
    <>
      <h2>Standings</h2>
      <ol className="standings">
        {ownersSorted.map((owner,idx) => (          
          <li data-place={idx+1} key={owner.ownerID}>
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
    </>
  )
}

export default Standings;