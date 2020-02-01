import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

//todo:
//-generate prompt from airtable randomw rows; "I need a __(part)__ that __(criteria)__"
//-display a random prompt image
//-indicate which player is the judge

const Prompt = ({ players }) => {
  return (
    <>
      <h1>
        I am a randomly generated prompt
      </h1>
      <h2>There are {players} players.</h2>
      <div>
        <Link to='/components'>
          <Button >Start Game</Button>
        </Link>
      </div>
    </>
  )
}
 export default Prompt
