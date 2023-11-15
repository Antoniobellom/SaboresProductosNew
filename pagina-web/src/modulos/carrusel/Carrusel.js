import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import Card from '../card/Card';

const CardCarousel = ({ cardData }) => {
  // Define cuántas tarjetas quieres por diapositiva.
  const cardsPerSlide = 4;
  const carouselItems = [];

  // Divide cardData en subarrays de tamaño cardsPerSlide.
  for (let i = 0; i < cardData.length; i += cardsPerSlide) {
    const items = cardData.slice(i, i + cardsPerSlide);
    carouselItems.push(
      <Carousel.Item key={i}>
        <Row>
          {items.map((item, index) => (
            <Col key={index} md={3} className="d-flex justify-content-center">
              <Card {...item} />
            </Col>
          ))}
        </Row>
      </Carousel.Item>
    );
  }

  return (
    <Carousel>
      {carouselItems}
    </Carousel>
  );
};

export default CardCarousel;