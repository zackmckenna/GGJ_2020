import React from 'react'
import { Card } from 'react-bootstrap'

const InventoryItemCard = ({ component }) => {
  console.log(component)
  if (component.Attachments){
    return (
      <Card style={{ width: '10rem' }}>
        <Card.Img style={{ width: '100px', height: '100px'}} variant="top" src={component.Attachments[0].url} />
        <Card.Body>
          <Card.Title className='text-dark'>{component.Name}</Card.Title>
          {/* <Card.Text>
            {component.Name}
          </Card.Text> */}
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    )
        }
    return (
      <>
      </>
    )
  }



export default InventoryItemCard
