import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import InventoryItemCard from './InventoryItemCard'

const InventoryGrid = ({ player }) => {

  return (
    <>
      <Container >
        <Row>
          <Col>
            <h2 className='text-light'>{player.Name}</h2>
          </Col>
        </Row>
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
