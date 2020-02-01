import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


//todo:
//-generate prompt from airtable randomw rows; "I need a __(part)__ that __(criteria)__"
//-display a random prompt image
//-indicate which player is the judge


const Prompt = ({ players, parts, criteria }) => {

  const grabRandomPart = () => {
    return parts[Math.floor(Math.random() * parts.length)].Name
  }

  const grabRandomCriteria = () => {
    return criteria[Math.floor(Math.random() * criteria.length)].Name
  }

  return (
    <>
      <h1>
        I need a <span className='text-danger'>{grabRandomPart()}</span> that <span className='text-warning'>{grabRandomCriteria()}</span>.
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
