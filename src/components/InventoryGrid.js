import React from 'react'
import { Col, Row, Container, Button, FormGroup } from 'react-bootstrap'
import InventoryItemCard from './InventoryItemCard'
import { Link } from 'react-router-dom'
const InventoryGrid = ({ player, handleScoreClick }) => {
  console.log(player)
  return (
  <>
      <Row >
        <Col className='text-nowrap'>
          <h5 className='text-nowrap'>{player.name}</h5>
        </Col>
        <Col>
        </Col>
        <Col className='text-nowrap'>
          <h5 className='text-nowrap'> Score: {player.score} </h5>
        </Col>
        <Col>
        </Col>
        <Col >
          <Link to={process.env.PUBLIC_URL + '/prompt'}>
            <Button className='btn-success text-nowrap' onClick={() => handleScoreClick(player)}>Award Contract</Button>
          </Link>
        </Col>
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
