import React, { useState } from 'react';

import { Button, Form } from 'react-bootstrap'
import { withRouter, Link } from 'react-router-dom'


var introPix = new Array("STATION.BMP","TEMPLE.BMP","ASTEROID.BMP");
function getRandomImage(imgAr, path) {
    path = path || '/images/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = process.env.PUBLIC_URL + path + img;
    return imgStr;
}

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
    Space Station Gizmo Guy!
      <img src={getRandomImage(introPix, '/images/intros/')} className="App-logo" alt="logo" />
      <p></p>
        <code>GGJ 2020</code>
      <p>How many players?</p>
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
