import React from 'react'
import { Card } from 'react-bootstrap'

const InventoryItemCard = ({ component }) => {
  if (component.Attachments){
    return (
      <Card style={{ width: '8rem' }}>
        <Card.Img fluid className='text-center' style={{ width: '100px', height: '100px'}} variant="top" src={component.Attachments[0].url} />
        <Card.Body>
          <Card.Text className='text-dark'>{component.Name}</Card.Text>
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
