import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import Card from '../card/Card';

const CardCarousel = ({ cardData }) => {
  const cardsPerSlide = 4;
  const carouselItems = [];

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