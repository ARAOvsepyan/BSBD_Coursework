import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {Context} from '..'
import {useParams} from 'react-router-dom'
import {fetchOneTour} from '../http/tourApi'
import { buyTour } from '../http/saleApi';

const TourPage = () => {
    const {user} = useContext(Context)
    const [tour, setTour] = useState([])
    const [amount, setAmount] = useState('')
    const [country, setCountry] = useState('')
    const [feeding, setFeeding] = useState('')
    const {id} = useParams()

    const add = () => {
        const info = new FormData()
        info.append('date', '26.07.1999')
        info.append('quantity', 1)
        info.append('userId', user._user.user.id)
        info.append('tourId',  tour.id)
        try {  
            buyTour(info)
        } catch (error) {
          alert('Что то пошло не так')
        }
    }
    

    useEffect(() => {
        fetchOneTour(id).then(data => {
            setTour(data)
            setAmount(data.reduction.amount)
            setCountry(data.country.name)
            setFeeding(data.feeding.type)
        })
    }, [id])

    return (
        <Container className="mt-3">
            
            <Row>
                <Image width={300} height={300} src={'http://localhost:8000/' + tour.img} />
                    <Col>
                            <Row className="d-flex flex-column align-items-center m-3">
                                <h2>{tour.tour_name}</h2>
                            </Row>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                        <Card
                            className="d-flex flex-column align-items-center justify-content-around m-3 p-3"
                        >
                            <h3>Цена с учетом скидки: {amount > 0 ? 
                            (tour.price*amount)/100 
                            : 
                            tour.price
                            } руб.</h3>
                            Скидка: {amount + '%'}
                            <Button variant={"outline-dark"} onClick={add}>Купить</Button>
                        </Card>
                    </Col>
                    </Row>
          
            <Row className="d-flex flex-column m-3">
            <Col>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around m-3 p-3"
                    >
                        <h1>Подробная информация</h1>
                        <Row style={{padding: 10}}>
                            Дата: {tour.date} <br />
                            Город вылета: {tour.dep_city} <br />
                            Взросыл: {tour.adilts} <br />
                            Детей: {tour.children} <br />
                            Питание: {feeding === true ? 'Есть' : 'Нет'} <br />
                            Дней: {tour.days} <br />
                            Ночей: {tour.nights} <br />
                            Страна прилета: {country} <br />
                        </Row>
                    </Card>
                    </Col>
            </Row>           
        </Container>
    );
}

export default TourPage 