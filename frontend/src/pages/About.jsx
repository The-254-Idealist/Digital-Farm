import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Header from '../Header'

const About = () => {
  return (
    <>
     <Header />
       <Container>
           <Row>
               <Col>
                <Card style={{ width: '40rem' }} className="text-center">
                    {/* <Card.Img src="https://bit.ly/3lf1eYr" alt="Card image" height={500} /> */}
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text >
                        DigiAgri is your number one happy reliable online solution espicially for customers that need products and services for agricultural purposes.
                        For any  purchase of tools seeds fertilizers etc ,hire for heavy machines and any type of service in the  agricultural field.DigiAgri got you!!.
                        In this platform you can easily access anytype of agricultural product needed high quality,affordable prices with a small transporatation fee.
                       DigiAgri has payment options that suit everyone, and we have a payment-on-delivery option for extra convenience.Customers feedback is also very 
                       encouraged and customer provided with return policy.This platform also welcomes sellers to use this platform as their shop to make the agricultural 
                       products and servives market easier and cheaper.
                       This platform was mainly developed to help customers who are not able to access a particular product to be able to reach it with just a click on their 
                       phone and 
                        </Card.Text>
                       </Card.ImgOverlay>
                    </Card>
                 </Col>
               <Col>
                    <Card border="dark" style={{ width: '24rem' }}>
                     <Card.Body>
                        <Card.Title>ABout Wakulima Tech</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
               </Col>

           </Row>
       </Container> 
    </>
  )
    }

export default About
