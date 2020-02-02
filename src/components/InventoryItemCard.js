import React from 'react'
import { Card } from 'react-bootstrap'

const InventoryItemCard = ({ component }) => {
  if (component.Attachments){
    return (
      <Card className='text-center' style={{ height: '125px', width: '8rem' }}>
          <Card.Img variant="top" style={{ maxHeight: '70%'}}  src={component.Attachments[0].url} />
        <Card.Body>
          <Card.Text style={{ fontSize: '13px'}} className='text-dark'><span className='no-wrap'>{component.Name}</span></Card.Text>
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
