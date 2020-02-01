import React from 'react'
import { Card } from 'react-bootstrap'
const Components = ({ players }) => {

  const components = [
    'duck', 'tape', 'grease','tentacle','yo-yo','mangos'
  ]

  return (
    <>
      {components.map(component => {
        return (
          <Card className='text-dark'>
            {component}
          </Card>
        )
      })}
    </>

  )
}

export default Components
