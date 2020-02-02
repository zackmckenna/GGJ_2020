import React, { useState, useEffect } from 'react'
import { Container, Card, Jumbotron, Navbar, Row, Col } from 'react-bootstrap'
import InventoryItemCard from './InventoryItemCard'
import InventoryGrid from './InventoryGrid'

const CreativeRound = ({ timerCounter, setTimerCounter, players, playerNames, playerObjects, components, judgeIndex }) => {
  const [componentArray, setComponentArray] = useState([])

  useEffect(() => {
    // const updateCountdown = () => {
    //   console.log(timerCounter)
    //   if (timerCounter > 0) {
    //     setTimerCounter(timerCounter => timerCounter - 1)
    //     console.log(timerCounter)
    //   } else {
    //     clearInterval(timer)
    //   }
    // }
    // var timer = setInterval(updateCountdown, 1000)

  }, [])
  console.log(playerObjects)
  console.log(timerCounter)

  const roundPlayers = playerObjects.map(player => {
    for (let i = 0; i < 6; i++) {
      player.components[i] = components[Math.floor(Math.random() * components.length)]
    }
  })

  const boxMaker = (index) => {
    if (playerObjects[index]){
      if (judgeIndex !== index){
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
