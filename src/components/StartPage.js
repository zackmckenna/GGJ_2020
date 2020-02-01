import React, { useState } from 'react';
import ggjLogo from '../ggjLogo.svg'
import { Button, Form } from 'react-bootstrap'
import { withRouter, Link } from 'react-router-dom'

const StartPage = ({
  handlePlayerChange,
  players
})=> {

  const handleClick = () => {
    console.log('clicked')
    // props.history.push('/prompt')
  }

  return (
    <>
    Start Page
      <img src={ggjLogo} className="App-logo" alt="logo" />
      <p></p>
        <code>GGJ 2020</code>
      <p>How many players ?</p>
    <Form onChange={event => handlePlayerChange(event)}>
    <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Select Number of Players</Form.Label>
    <Form.Control as="select" multiple>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
    </Form.Control>
  </Form.Group>
    </Form>

    <Link to='/prompt'>
      <Button onClick={() => handleClick()}>Start Game</Button>
    </Link>
    </>
  )
}

export default StartPage
