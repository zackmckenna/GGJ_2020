import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Form, Button, FormControl } from 'react-bootstrap'
import { BrowserRouter as Router,
        Switch,
        Route,
      Link } from 'react-router-dom'
import Prompt from './components/Prompt'
import StartPage from './components/StartPage'
import CreativeRound from './components/CreativeRound'
import axios from 'axios'
import BackgroundMusic from './components/MyComponentWithSound'
import Timer from './components/Timer'

function App() {
  const [players, setPlayers] = useState(0)
  const [playerObjects, setPlayerObjects] = useState([])
  const [judgeIndex, setJudgeIndex] = useState(0)
  const [judgeName, setJudgeName] = useState('No judge yet')
  const [playerNames, setPlayerNames] = useState([])
  const [parts, setParts] = useState([])
  const [components, setComponents] = useState([])
  const [criteria, setCriteria] = useState([])
  const [nameInput, setNameInput] = useState('')
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    axios.get('https://guarded-ridge-39330.herokuapp.com/api/airtable/parts')
        .then(res => {
          console.log('Parts', res.data)
          res.data.map(part => {
            const newPart = part
            setParts(parts => [...parts, newPart])
          })
        })

    axios.get('https://guarded-ridge-39330.herokuapp.com/api/airtable/components')
        .then(res => {
          console.log('Components', res.data)
          res.data.map(component => {
            const newComponent = component
            setComponents(components => [...components, newComponent])
          })
        })

    axios.get('https://guarded-ridge-39330.herokuapp.com/api/airtable/criteria')
          .then(res => {
            console.log('Criteria', res.data)
            res.data.map(criteria => {
              if (criteria.Name) {
                const newCriteria = criteria
                setCriteria(criteria => [...criteria, newCriteria])
              }
            })
          })

  }, [])

  const incrementJudge = () => {
    if (judgeIndex >= playerObjects.length){
      setJudgeIndex(0)
    } else {
      setJudgeIndex(judgeIndex + 1)
    }
  }

  const handleRestartClick = () => {
    incrementJudge()
    if (playerObjects[judgeIndex]){
      setJudgeName(playerObjects[judgeIndex].name)
    }
  }

  const handleNameSubmit = event => {
    console.log(event)
    event.preventDefault()
    if (nameInput !== ''){
      const newPlayerObject = {
        name: nameInput,
        components: [],
        score: 0
      }
      setPlayerObjects([...playerObjects, newPlayerObject])
      setPlayerNames(playerNames => [...playerNames, nameInput])
      setNameInput('')
      event.target.value = ''
      console.log('Player Objects:', playerObjects)
    }
  }

  const handleRestartGame = () => {
    setPlayerObjects([])
  }

  // const judgeName = () => {
  //   if (playerObjects[judgeIndex]) {
  //     return playerObjects[judgeIndex].Name
  //   } else {
  //     return 'No judge yet'
  //   }
  // }

  // const handlePlayerChange = event => {
  //   setPlayers(event.target.value)
  // }
  // six items
  return (
    <div className="App">
        {/* <Navbar className='sticky-top' bg="light">
          <Navbar.Brand href="#home">Judge: {judgeName} </Navbar.Brand>
        </Navbar> */}
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + "/"} render={() => {
              return (
                <StartPage
                  players={players}
                  // handlePlayerChange={handlePlayerChange}
                  nameInput={nameInput}
                  setNameInput={setNameInput}
                  handleNameSubmit={handleNameSubmit}
                  playerNames={playerNames}
                  playerObjects={playerObjects}
                  setJudgeName={setJudgeName}
                  judgeIndex={judgeIndex}
                  />
              )}
            }/>

            <Route path={process.env.PUBLIC_URL + "/prompt"} render={() => {
              return (
                <Prompt
                  players={players}
                  parts={parts}
                  criteria={criteria}
                  playerNames={playerNames}
                  playerObjects={playerObjects}
                  setTimeLeft={setTimeLeft}
                  judgeName={judgeName}
                  judgeIndex={judgeIndex}
                  />

              )}
            }/>
            <Route path={process.env.PUBLIC_URL + "/components"} render={() => {
              return (
                <CreativeRound
                  players={players}
                  playerNames={playerNames}
                  components={components}
                  playerObjects={playerObjects}
                  judgeIndex={judgeIndex}
                  handleRestartClick={handleRestartClick}
                  judgeName={judgeName}
                  judgeIndex={judgeIndex}
                  handleRestartGame={handleRestartGame}
                  />
              )
              }}/>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
