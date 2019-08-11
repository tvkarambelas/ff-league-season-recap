import React from 'react';
import Standings from './Standings';

const leagueName = 'Demo League';
const season = '2018';

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

            <Standings />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
