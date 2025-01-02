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
import BackgroundMusic from './components/MULTIComponentWithSound'
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
  const [soundToggle, setSoundToggle] = useState(false);
  const [gameState, setGameState] = useState([])

  useEffect(() => {
    const newGameState = {
      prompt: ''
    }
    setGameState(newGameState)

    const config = {
      headers: {
        "Authorization": "Bearer patME6t5dzll5pJZr.4c282e3d7bff491a22e1428861c76dc353cb8e771b9ca694acd124235a00a31c",
      },
    };

    axios.get('https://api.airtable.com/v0/apprkbgfXPMCZlFFR/Parts', config)
        .then(res => {
          res.data.records.map(part => {
            const newPart = part.fields
            setParts(parts => [...parts, newPart])
          })
        })

    axios.get('https://api.airtable.com/v0/apprkbgfXPMCZlFFR/Components', config)
        .then(res => {
          res.data.records.map(component => {
            const newComponent = component.fields
            setComponents(components => [...components, newComponent])
          })
        })

    axios.get('https://api.airtable.com/v0/apprkbgfXPMCZlFFR/Criteria', config)
          .then(res => {
            res.data.records.map(criteria => {
              const newCriteria = criteria.fields
              setCriteria(criteria => [...criteria, newCriteria])
            })
          })

  }, [])

  const handleScoreClick = playerClicked => {
    incrementJudge()
    if (playerObjects[judgeIndex]){
      setJudgeName(playerObjects[judgeIndex].name)
    }
    console.log(playerClicked)
    let newPlayerObjects = playerObjects
    newPlayerObjects.map(player => {
      if (player === playerClicked) {
        player.score++
        }
      })
    setPlayerObjects(newPlayerObjects)
  }

  const incrementJudge = () => {
    if (judgeIndex >= playerObjects.length-1){
      setJudgeIndex(0)
    } else {
      setJudgeIndex(judgeIndex + 1)
    }
  }

  // const handleRestartClick = () => {
  //   incrementJudge()
  //   if (playerObjects[judgeIndex]){
  //     setJudgeName(playerObjects[judgeIndex].name)
  //   }
  // }

  const handleNameSubmit = event => {
    event.preventDefault()
    let playerNameArray = playerObjects.map(player => player.name)
    if (nameInput !== '' && (!playerNameArray.includes(nameInput))){
      const newPlayerObject = {
        name: nameInput,
        components: [],
        score: 0
      }
      setPlayerObjects([...playerObjects, newPlayerObject])
      setPlayerNames(playerNames => [...playerNames, nameInput])
      setNameInput('')
      event.target.value = ''
    }
  }

  const handleRestartGame = () => {
    setPlayerObjects([])
  }

  const handleToggleSound = () => {
    setSoundToggle(!soundToggle)
  }

  const handleRestartSound = () => {
    if (soundToggle && judgeIndex == 0){
      //do something to reload the music
      setSoundToggle(false)
      setTimeout(() => {
        setSoundToggle(true)
      },500);
    }
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
        {soundToggle ? <BackgroundMusic/> : null}
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
                  handleToggleSound={handleToggleSound}
                  gameState={gameState}
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
                  gameState={gameState}
                  setGameState={setGameState}
                  handleRestartSound={handleRestartSound}
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
                  judgeName={judgeName}
                  judgeIndex={judgeIndex}
                  handleRestartGame={handleRestartGame}
                  gameState={gameState}
                  handleScoreClick={handleScoreClick}
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
