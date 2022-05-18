import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { useNavigate } from "react-router";
import { TOUR_ROUTE } from '../utils/consts';

const TourItem = ({tour}) => {
  const navigate = useNavigate()

  return (
    <Container
          className="d-flex justify-content-center align-items-center"
    >
      <Card className='m-4' style={{width: 600, cursor: 'pointer'}} border={"light"} onClick={() => navigate(TOUR_ROUTE + '/' + tour.id)}>
        <Card.Img variant="top" src={'http://localhost:8000/' + tour.img} />
        <Card.Body>
          <Card.Title>{tour.tour_name}</Card.Title>
          <Card.Text>
              {tour.text}
              {tour.dep_city} - {tour.country.name} <br/>
              Цена: {tour.reduction.amount > 0 ? 
                (tour.price - (tour.price*tour.reduction.amount)/100)
                : 
                tour.price
                } ₽ <br/>
              Скидка: {tour.reduction.amount + '%'}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TourItem;