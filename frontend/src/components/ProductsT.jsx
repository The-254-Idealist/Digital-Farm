import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Products = (props) => {
  return (
     
     <div className="product-container" >
       {<Link to='/aboutProduct' className='btn' >
       <Card className='product-card' style={{ marginRight: '20px' }} >
         <Card.Img variant="top" src="https://bit.ly/3lf1eYr" width={200} height={300} />
          <Card.Body>
            <Card.Title className='product-name'>{props.name}</Card.Title>
            <Card.Subtitle className=''>{props.price}</Card.Subtitle>
          </Card.Body>
       </Card>
         </Link>} 
      
    </div>
  )
}

export default Products