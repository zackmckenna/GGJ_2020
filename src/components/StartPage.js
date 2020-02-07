import React, { useState, useEffect } from 'react';

import { Button, Form, Row, Col, ButtonToolbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


var introPix = new Array("STATION.BMP","TEMPLE.BMP","ASTEROID.BMP");
function getRandomImage(imgAr, path) {
    path = path || '/images/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = process.env.PUBLIC_URL + path + img;
    return imgStr;
}

const StartPage = ({
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

  function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
     (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {  
        document.documentElement.requestFullScreen();  
      } else if (document.documentElement.mozRequestFullScreen) {  
        document.documentElement.mozRequestFullScreen();  
      } else if (document.documentElement.webkitRequestFullScreen) {  
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
      }  
    } else {  
      if (document.cancelFullScreen) {  
        document.cancelFullScreen();  
      } else if (document.mozCancelFullScreen) {  
        document.mozCancelFullScreen();  
      } else if (document.webkitCancelFullScreen) {  
        document.webkitCancelFullScreen();  
      }  
    }  
  }

  return (
    <>
    <p>Gornath Crafters Guild: <i>Bidding Challenge</i>!</p>
      <img src={getRandomImage(introPix, '/images/intros/')} className="App-logo" alt="logo" />
      <ButtonToolbar>
      <Button className="mr-5" onClick={(event) => {handleAudioClick(event)}}>Play/Pause Music</Button>
      <Button onClick={(event) => {toggleFullScreen()}}>Fullscreen</Button> 
      </ButtonToolbar>
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

    {playerObjects.length <= 4 ? <Form onChange={(event) => handleNameInputChange(event)}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Add 3-5 Players:</Form.Label>
        <Row>
          <Col>
            <Form.Control value={nameInput} type="text" placeholder="player name"/>
          </Col>
          <Col>
            <Button type='submit' onClick={(event) => {event.preventDefault(); handleClick(event)}}>Add Player</Button>
          </Col>
        </Row>
      </Form.Group>
    </Form> : null}

    <ul>
      {playerObjects.map((player, index) => {
        return (
          <p key={index}>{player.name}</p>
        )
      })}
    </ul>

    <Link to={process.env.PUBLIC_URL + '/prompt'}>
      <Button onClick={() => handleClickStart()}>Start Game</Button>
    </Link>

    <p align="left">
    <p>Game Instructions:</p>
    <ol>
      <li>Gather 3-5 players. Each player will need a few index card size pieces of paper and a pen.</li>
      <li>In each round of the game one player will be the “client” and the other players will be the “crafters”</li>
      <li>The client will read the prompt and may make up a background story for why they need this item</li>
      <li>Once “Bidding” begins, all of the other players will be presented with a list of items available to them,
      and then have 2 minutes to make up a widget and prepare their pitch (it should be written on their paper). The pitch must have a:</li>
      <ol>
      <li>Name</li>
      <li>Explanation/drawing of how it works, and how it meets the client’s needs</li>
      </ol>
      <li>Once the 2 minute countdown ends, the client will listen to each crafter’s pitch. The client then awards the contract for the proposal that they feel is the most convincing.</li>
      <li>Play ends when players have had enough, and all players have been a judge the same amount of times</li>
    </ol>
    </p>

    </>
  )
}

export default StartPage
