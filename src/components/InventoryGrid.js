import React from 'react'
import { Col, Row, Container, Button } from 'react-bootstrap'
import InventoryItemCard from './InventoryItemCard'
import { Link } from 'react-router-dom'
const InventoryGrid = ({ player, handleScoreClick }) => {
  console.log(player)
  return (
    <>
      <Row>
      <h5>{player.name} {player.score}</h5>
        <Link to={process.env.PUBLIC_URL + '/prompt'}>
          <Button onClick={() => handleScoreClick(player)}>Award Contract</Button>
        </Link>
      </Row>
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
