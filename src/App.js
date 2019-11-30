import React, {useState} from 'react';
import {withRouter} from 'react-router-dom'

function App(props) {
  const [leagueID, setLeagueID] = useState('')

  function handleSubmit(e,leagueID) {
    e.preventDefault();

    if (leagueID) {
      props.history.push('/leagueID/'+leagueID);
    }
  }

  return (
    <>
      <div id="start-page">
        <header className="row">
          <div className="inner">
            <div className="top">
              <div className="site-title">Sleeper FF League Season Recap</div>
              <p>A tool to generate a visualized season recap for Sleeper fantasty football leagues.</p>
              <p>To continue, enter a league ID in the form below...</p>
            </div>
          </div>
        </header>

        <main>
          <div className="row">
            <div className="inner centered">
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
                  onClick={e => handleSubmit(e,leagueID)}
                >Submit</button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default withRouter(App);