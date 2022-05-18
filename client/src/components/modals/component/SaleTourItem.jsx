import React from 'react';
import {observer} from "mobx-react-lite";
import { Container, Card } from 'react-bootstrap';

const SaleTourItem = observer((sale) => {
    
    return (
    <Container
        className="d-flex justify-content-center align-items-center"
    >
        <Card className='m-4' >
            <Card.Body>
               Название тура: {sale.sale.tour.tour_name} <br />
               Пользователь: {sale.sale.user.firs_name} {sale.sale.user.last_name} <br />
               Количество: {sale.sale.quantity} <br />
               Дата покупки: {sale.sale.date}
            </Card.Body>
        </Card>
    </Container>
    );
});

export default SaleTourItem;