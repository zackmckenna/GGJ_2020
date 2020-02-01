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

function App() {
  const [players, setPlayers] = useState(0)
  const [playerNames, setPlayerNames] = useState([])
  const [parts, setParts] = useState([])
  const [components, setComponents] = useState([])
  const [criteria, setCriteria] = useState([])


  useEffect(() => {
    axios.get('https://guarded-ridge-39330.herokuapp.com/api/airtable/parts')
        .then(res => {
          console.log(res)
          console.log(res.data)
          console.log(`Parts: ${res.data}`)
          res.data.map(part => {
            console.log(part)
            const newPart = part
            setParts(parts => [...parts, newPart])
          })
        })

    axios.get('https://guarded-ridge-39330.herokuapp.com/api/airtable/components')
        .then(res => {
          console.log(res.data)
          res.data.map(component => {
            const newComponent = component
            setComponents(components => [...components, newComponent])
          })
        })

    axios.get('https://guarded-ridge-39330.herokuapp.com/api/airtable/criteria')
          .then(res => {
            console.log(res.data)
            console.log(`Criteria: ${res.data}`)
            res.data.map(criteria => {
              if (criteria.Name) {
                const newCriteria = criteria
                setCriteria(criteria => [...criteria, newCriteria])
              }
            })
          })
  }, [])

  const handlePlayerChange = async event => {
    setPlayers(event.target.value)
    parts.map(part => {
      console.log(part.Name)
    })
    components.map(component => {
      if (component.Attachments) {
        console.log(component.Attachments[0].url)
      }
    })
    criteria.map(criteria => {
      console.log(criteria)
    })
  }
  // six items
  return (
    <div className="App">
      <StartPage players={players} handlePlayerChange={handlePlayerChange}/>
      <header className="App-header">
        <BackgroundMusic/>
        <StartPage players={players} handlePlayerChange={handlePlayerChange} />
        <Router>
          <Switch>
            <Route exact path="GGJ_2020/" render={() => <StartPage players={players} handlePlayerChange={handlePlayerChange} />} />
            <Route path="/prompt" render={() => {
              return (
                <Prompt
                  players={players}
                  parts={parts}
                  criteria={criteria}/>
              )}
            }/>
            <Route path="/components" render={() => <Components players={players} />} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
