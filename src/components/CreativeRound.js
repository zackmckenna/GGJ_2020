import React, { useState, useEffect } from 'react'
import { Container, Card, Jumbotron, Navbar, Row, Col } from 'react-bootstrap'
import InventoryItemCard from './InventoryItemCard'

const CreativeRound = ({ players, playerNames, components }) => {
  const [componentArray, setComponentArray] = useState([])

  // useEffect(() => {
  //   console.log(countdown)
  //   countdown(120)
  // })


  let styles = {
    width: '50%'
  }

  return (
    <>
      {components.map(component => {
        return <InventoryItemCard component={component} />      })}
    </>

  )
}

export default CreativeRound
