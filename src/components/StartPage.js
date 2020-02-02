import React, { useState, useEffect } from 'react';

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
  players,
  setNameInput,
  nameInput,
  handleNameSubmit,
  playerNames,
  playerObjects,
  setJudgeName,
  judgeIndex,
  handleToggleSound
})=> {

  const handleClickStart = () => {
    console.log('clicked')
    setJudgeName(playerObjects[judgeIndex].name)
    // props.history.push('/prompt')
  }

  const handleClick = event => {
    event.preventDefault()
    handleNameSubmit(event)
  }

  const handleNameInputChange = event => {
    setNameInput(event.target.value)
  }

  const handleAudioClick = event => {
    handleToggleSound()
  }

  return (
    <>
    Space Station Gizmo Guy!
      <img src={getRandomImage(introPix, '/images/intros/')} className="App-logo" alt="logo" />
      <Button onClick={(event) => {handleAudioClick(event)}}>Play/Pause Music</Button>
      <p></p>
        <code>GGJ 2020</code>

<p>Welcome to Space Station Gornath! What brings you this deep into the Omega Quadrant?
Anyways, the rough conditions and remoteness of this region make this output an oasis for explorers. Most visitors have a need for repairs and upgrades.
Due to this need multiple repair shops have emerged in the station, of varying quality…</p>

<p>In this game you will take turns being the <u>repair shop owners</u> and <u>clients</u> with particular needs. </p>

<p>As the <u>repair shop owner</u>, the sale is all that matters - the almighty space buck is king. You will need to work with what you have to engineer a solution and out-sell the rival shops. </p>

<p>As the <u>client</u>, you will decide which solution to purchase based on its ingenuity and how well it solves your problem. In these times, it doesn’t take much to get a ship, and most pilots aren’t experts in engineering.</p>

<p>Get ready to craft some space stuff!</p>
<p></p>
<p></p>

      <p>Add up to 5 Players</p>
    {/* <Form onChange={event => handlePlayerChange(event)}>
    <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Select Number of Players</Form.Label>
    <Form.Control as="select" multiple>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
    </Form.Control>
  </Form.Group>
    </Form> */}
    {playerObjects.length <= 4 ? <Form onChange={(event) => handleNameInputChange(event)}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>player name</Form.Label>
        <Form.Control value={nameInput} type="text" placeholder="player name" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
        <Button type='submit' onClick={(event) => {event.preventDefault(); handleClick(event)}}>Add Player</Button>
      </Form.Group>
    </Form> : null}

    <ul>
      {playerObjects.map((player, index) => {
        return (
          <li key={index}>{player.name}</li>
        )
      })}
      </ul>

    <Link to={process.env.PUBLIC_URL + '/prompt'}>
      <Button onClick={() => handleClickStart()}>Start Game</Button>
    </Link>
    </>
  )
}

export default StartPage
