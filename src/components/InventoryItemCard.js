import React from 'react'
import { Card } from 'react-bootstrap'

const InventoryItemCard = ({ component }) => {
  if (component.Attachments){
    return (
      <Card className='text-center' style={{ width: '8rem' }}>
        <Card.Img style={{ width: '100%', height: '100px'}} variant="top" src={component.Attachments[0].url} />
        <Card.Body>
          <Card.Text style={{ fontSize: '13px'}} className='text-dark'>{component.Name}</Card.Text>
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
