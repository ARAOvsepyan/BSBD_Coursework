import React from 'react';
import { Container, Col, Card } from 'react-bootstrap';

const TourItem = ({tour}) => {
    return (
      <Container
            className="d-flex justify-content-center align-items-center"
      >
        <Card className='m-4' style={{width: 600, cursor: 'pointer'}} border={"light"}>
          <Card.Img variant="top" src={'http://localhost:8000/' + tour.img} />
          <Card.Body>
            <Card.Title>{tour.tour_name}</Card.Title>
            <Card.Text>
                {tour.text}
                {tour.dep_city} - {tour.country.name} <br/>
                Цена: {tour.reduction.amount > 0 ? 
                  (tour.price*tour.reduction.amount)/100 
                  : 
                  tour.price
                  } <br/>
                Склидка: {tour.reduction.amount + '%'}
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
};

export default TourItem;