import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


//todo:
//-generate prompt from airtable randomw rows; "I need a __(part)__ that __(criteria)__"
//-display a random prompt image
//-indicate which player is the judge

var customerPix = new Array("RDE-001C.BMP", "KFR-010B.BMP", "GBR-505C.BMP", "GLB-031C.BMP", "CTD-012C.BMP", "DZI-323C.BMP", "ISLANDS.BMP", "GBR-504C.BMP", "KFR-011B.BMP", "FUTURGAL.BMP", "KFR-007B.BMP", "EDW-147C.BMP", "MCG-508C.BMP", "RHT-013C.BMP", "MCG-411C.BMP", "LAL-017C.BMP", "GREENSHP.BMP", "GBR-515C.BMP", "DRM-00~1.BMP", "DLN-101C.BMP", "BHB-069B.BMP", "MCG-518C.BMP", "DLA-006C.BMP", "BEL-102C.BMP", "CWL-004B.BMP", "LAL-016C.BMP", "GBR-538B.BMP", "HANGAR.BMP", "MCG-413C.BMP", "EDW-066B.BMP", "AMC-103C.BMP", "JLQ-253C.BMP", "LTF-015B.BMP", "RHT-016C.BMP", "KFR-015C.BMP", "CYH-010B.BMP", "DLA-008C.BMP", "LAL-014C.BMP", "CWL-006B.BMP", "DLN-105C.BMP", "HRD-052C.BMP", "HJL-016C.BMP", "CHN-003C.BMP", "KFR-008B.BMP", "AMC-020C.BMP", "HJL-017C.BMP", "RBP-002C.BMP", "GBR-025C.BMP", "RMO-011C.BMP", "KFR-013B.BMP");
function getRandomImage(imgAr, path) {
    path = path || '/images/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = process.env.PUBLIC_URL + path + img;
    return imgStr;
}


const Prompt = ({ players, playerObjects, setTimeLeft, parts, criteria, setIsTimer }) => {

  const grabRandomPart = () => {
    if (parts){
      return parts[Math.floor(Math.random() * parts.length)].Name
    } else {
      return 'Error'
    }
  }

  const handleClick = () => {
    console.log('clicked')
  }

  const grabRandomCriteria = () => {
    if (criteria) {
      return criteria[Math.floor(Math.random() * criteria.length)].Name
    } else {
      return 'Error'
    }
  }

  return (
    <>
      <img src={getRandomImage(customerPix, '/images/scenarios/')} className="App-logo" alt="logo" />
      <h1>
        I need a <span className='text-danger'>{grabRandomPart()}</span> that <span className='text-warning'>{grabRandomCriteria()}</span>.
      </h1>
      <h2>There are {playerObjects.length} players.</h2>
      <div>
        <Link to={process.env.PUBLIC_URL + '/components'}>
          <Button onClick={() => handleClick()}>Start Game</Button>
        </Link>
      </div>
    </>
  )
}
 export default Prompt
