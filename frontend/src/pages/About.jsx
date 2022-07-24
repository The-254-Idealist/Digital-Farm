import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const About = () => {
  return (
    <>
         <Container variant='success' >
           <Row>
               <Col>
                <Card style={{ width: '40rem', height:'500' }} className="text-center">
                    <Card.Img src="https://bit.ly/3PvVLdg" alt="Card image" height={500} />
                    <Card.ImgOverlay>
                        <Card.Title>About DIGITALFARMHOUSE</Card.Title>
                        <Card.Body  >
                        Digital-farmhouse is your number one happy reliable online solution espicially for customers that need products and services for agricultural purposes.
                        For any  purchase of tools seeds fertilizers etc ,hire for heavy machines and any type of service in the  agricultural field.DigiAgri got you!!.
                        In this platform you can easily access anytype of agricultural product needed high quality,affordable prices with a small transporatation fee.
                       DigiAgri has payment options that suit everyone, and we have a payment-on-delivery option for extra convenience.Customers feedback is also very 
                       encouraged and customer provided with return policy.This platform also welcomes sellers to use this platform as their shop to make the agricultural 
                       products and servives market easier and cheaper.
                       This platform was mainly developed to help customers who are not able to access a particular product to be able to reach it with just a click on their 
                       phone 
                        </Card.Body>
                       </Card.ImgOverlay>
                    </Card>
                 </Col>
               <Col>
                    <Card border="dark" style={{ width: '24rem' }}>
                
                     <Card.Body>
                        <Card.Title>ABout Digital-farmHouse</Card.Title>
                        <Card.Text>
                                Our Platform is based on aiding farmer in their daily activities without much of moving around.
                                we deal with farm yard products and other 
                        </Card.Text>

                        The program is web based and we aim at delivering more items to the farmers in order to increase the out of the products.
                        </Card.Body>
                    </Card>
               </Col>

           </Row>
       </Container> 
    </>
  )
    }

export default About
