import React from 'react'
import { Col, Row, Container, Button, Form } from 'react-bootstrap'
import InventoryItemCard from './InventoryItemCard'
import { Link } from 'react-router-dom'
const InventoryGrid = ({ player, handleScoreClick }) => {
  console.log(player)
  return (
  <div className='border border-light'>
    <Form>
      <Form.Row>
        <Col>
          <h5 className='text-nowrap'>{player.name}</h5>
        </Col>
        <Col>
          <h5 className='text-nowrap'> Score: {player.score} </h5>
        </Col>
        <Col>
          <Link to={process.env.PUBLIC_URL + '/prompt'}>
            <Button className='btn-success text-nowrap' onClick={() => handleScoreClick(player)}>Award Contract</Button>
          </Link>
        </Col>
      </Form.Row>
    </Form>
      {/* <Row >
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
      </Row> */}
      <Container className='border border-light' >
        <Row >
          <Col className='col-4'>
            <InventoryItemCard component={player.components[0]}/>
          </Col>
          <Col className='col-4'>
            <InventoryItemCard component={player.components[1]} />
          </Col>
          <Col className='col-4'>
            <InventoryItemCard component={player.components[2]} />
          </Col>
        </Row>
        <Row >
          <Col className='col-4'>
            <InventoryItemCard component={player.components[3]}/>
          </Col>
          <Col className='col-4'>
            <InventoryItemCard component={player.components[4]} />
          </Col>
          <Col className='col-4'>
            <InventoryItemCard component={player.components[5]} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default InventoryGrid
