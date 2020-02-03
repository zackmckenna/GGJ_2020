import React from 'react'
import { Card } from 'react-bootstrap'

const InventoryItemCard = ({ component }) => {
  if (component.Attachments){
    return (
      <Card className='text-center' style={{ height: '125px', width: '8rem' }}>
          <Card.Img variant="top" style={{ maxHeight: '75%', objectFit: 'contain'}}  src={component.Attachments[0].url} />
          <div className='text-center' style={{position: 'absolute', bottom:'2px'}}>
            <Card.Text style={{ textShadow: '3px 3px 5px white', fontSize: '15px' }} className='text-dark'>{component.Name}</Card.Text>
          </div>
      </Card>
    )
        }
    return (
      <>
      </>
    )
  }



export default InventoryItemCard
