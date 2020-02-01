import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router,
        Switch,
        Route } from 'react-router-dom'
import Prompt from './components/Prompt'
import StartPage from './components/StartPage'
import Components from './components/Components'
import axios from 'axios'
import BackgroundMusic from './components/MyComponentWithSound'
// import base from './components/airtable'

function App() {
  const [players, setPlayers] = useState(0)
  const [playerNames, setPlayerNames] = useState([])
  const [airtableData, setAirtableData] = useState([])

  useEffect(() => {
    axios.get('https://api.airtable.com/v0/apprkbgfXPMCZlFFR/Parts?api_key=keyLErx2N17rFxZOY')
        .then(res => {
          console.log(res.data)
          setAirtableData( res.data)
        })
  }, [])

  const handlePlayerChange = async event => {
    setPlayers(event.target.value)
    console.log(airtableData)
    // console.log(base)
  }
  // six items
  return (
    <div className="App">
      <header className="App-header">
        <BackgroundMusic/>
        <Router>
          <Switch>
            <Route exact path="/" render={() => <StartPage players={players} handlePlayerChange={handlePlayerChange} />} />
            <Route path="/prompt" render={() => <Prompt players={players} />}/>
            <Route path="/components" render={() => <Components players={players} />} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
