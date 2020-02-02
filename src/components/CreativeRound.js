import React, { useState, useEffect } from 'react'
import { Container, Card, Jumbotron, Navbar, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import InventoryItemCard from './InventoryItemCard'
import InventoryGrid from './InventoryGrid'
import Timer from './Timer'

const CreativeRound = ({ timerCounter, judgeName, handleRestartGame, handleRestartClick, players, playerNames, playerObjects, components, judgeIndex }) => {
  const [componentArray, setComponentArray] = useState([])


  console.log(playerObjects)
  console.log(timerCounter)

  const roundPlayers = playerObjects.map(player => {
    var compVals = new Set()
    for (let i = 0; i < 6; i++) {
      var rand
      do{
        rand = Math.floor(Math.random() * components.length);
        compVals.add(rand)
      }while(!compVals.has(rand))
      
      player.components[i] = components[rand]
    }
  })

  const boxMaker = (index) => {
    if (playerObjects[index]){
      if (judgeIndex !== index && !(judgeIndex < index)){
        //do player index
        return (<InventoryGrid player={playerObjects[index]}/>)
      }else{
        //do player index+1
        if (playerObjects[index + 1]){
          return (<InventoryGrid player={playerObjects[index+1]}/>)
        } else {
          return
        }
      }
    } else {
      return
    }

  }

  return (
    <>
    <Row>
      <Col>
        <Timer seconds={120}/>
      </Col>
      <Col>
        <h5>Judge: {playerObjects[judgeIndex].name}</h5>
      </Col>
      <Col>
        <Link to={process.env.PUBLIC_URL + '/prompt'}>
          <Button onClick={() => handleRestartClick()}>Next Round</Button>
        </Link>
      </Col>
      <Col>
        <Link to={process.env.PUBLIC_URL + '/'}>
          <Button onClick={() => handleRestartGame()}>Restart Game</Button>
        </Link>
      </Col>
    </Row>
    <Container>
      <Row>
        <Col>
          {boxMaker(0)}
        </Col>
        <Col>
          {boxMaker(1)}
        </Col>
      </Row>
      <Row>
        <Col>
          {boxMaker(2)}
        </Col>
        <Col>
          {boxMaker(3)}
        </Col>
      </Row>
    </Container>

      {/* <Jumbotron>
        {components.map((component, index) => {
          if (index < 7) {
            return (
            <InventoryItemCard component={component} />
            )
          }
        })}

      </Jumbotron> */}
      {/* {components.map(component => {
        return <InventoryItemCard component={component} />      })} */}
    </>

  )
}

export default CreativeRound
