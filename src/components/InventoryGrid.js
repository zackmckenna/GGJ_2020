import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import InventoryItemCard from './InventoryItemCard'

const InventoryGrid = ({ player }) => {
  console.log(player)
  return (
    <>
      <h6>{player.name}</h6>
      <Container >
        <Row className='border border-light'>
          <Col>
            <InventoryItemCard component={player.components[0]}/>
          </Col>
          <Col>
            <InventoryItemCard component={player.components[1]} />
          </Col>
          <Col>
            <InventoryItemCard component={player.components[2]} />
          </Col>
        </Row>
        <Row className='border border-light'>
        <Col>
            <InventoryItemCard component={player.components[3]}/>
          </Col>
          <Col>
            <InventoryItemCard component={player.components[4]} />
          </Col>
          <Col>
            <InventoryItemCard component={player.components[5]} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default InventoryGrid
