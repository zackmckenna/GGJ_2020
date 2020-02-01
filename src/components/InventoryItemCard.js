import React from 'react'
import { Card } from 'react-bootstrap'

const InventoryItemCard = ({ component }) => {
  if (component.Attachments){
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img style={{ width: '200px', height: '200px'}} variant="top" src={component.Attachments[0].url} />
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
