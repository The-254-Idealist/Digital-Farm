import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'

const UpperCard = () => {
  return (
    <div>
            <Carousel>
            <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://bit.ly/3yHVvC9"
      alt="First slide"
      width={400}
      height={500}
    />
    <Carousel.Caption>
      <h3>Welcome to Digital FarmHouse</h3>
      <p>Home of great quality farm products and services.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://bit.ly/3NifKdJ"
      alt="Second slide"
      width={400}
      height={500}
    />

    <Carousel.Caption>
      <h3>We provide the best services </h3>
      <p>We ensure products of goods quality are being distributed.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://bit.ly/3MoxsMK"
      alt="Third slide"
      width={400}
      height={500}
    />

    <Carousel.Caption>
      <h3>Welcome all</h3>
      <p>Register with us and start trading and posting your products.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default UpperCard