import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row, ProgressBar} from "react-bootstrap";
import {Context} from '..'
import {useNavigate, useParams} from 'react-router-dom'
import { LOGIN_ROUTE } from '../utils/consts';
import {fetchOneTour, incTourPurchased} from '../http/tourApi'
import { buyTour } from '../http/saleApi';
import { getMoney } from '../http/walletApi';

const TourPage = () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const currDate = new Date().toLocaleDateString()


    const [tour, setTour] = useState([])
    const [amount, setAmount] = useState('')
    const [country, setCountry] = useState('')
    const [feeding, setFeeding] = useState('')
    const [purchased, setPurchased] = useState('')

    let [quantity, setQuantity] = useState(0)

    const {id} = useParams()

    const add = () => {       
        const info = new FormData()
        info.append('date', currDate)
        info.append('quantity', quantity)
        info.append('userId', user._user.user.id)
        info.append('tourId',  tour.id)

        try {  
            buyTour(info)
            .then((data) => {
                if (data === 'Недостаточно средств') {
                    alert(data)
                    return
                }
                getMoney({price: (tour.price * ((100 - amount)/100)), userId: user._user.user.id})
                .then(() => {
                    alert('Покупка прошла успешно')
                })
                incTourPurchased(tour.id)
            })
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
            setPurchased((data.purchased * 100) / data.need_to)
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
            <ProgressBar animated now={purchased} label={`${tour.purchased}/${tour.need_to}`} />
                    <Row>
                    <Col>
                        <Card
                            className="d-flex flex-column align-items-center justify-content-around m-3 p-3"
                        >
                            <h3>Цена с учетом скидки: {
                            (tour.price * ((100 - amount)/100))
                            } ₽</h3>
                            Скидка: {amount + '%'}
                            <td>
                                <span className="btn btn-primary" style={{ margin: '2px' }} onClick={()=>setQuantity(quantity-=1)}>-</span>
                                <span className="btn btn-info">{quantity}</span>
                                <span className="btn btn-primary" style={{ margin: '2px' }} onClick={()=>setQuantity(quantity+=1)}>+</span>
                            </td>
                            {user.isAuth === 'USER' ? 
                                <Button variant={"outline-dark"} onClick={add}>Купить</Button>
                                :
                                <Button variant={"outline-dark"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизуйтес что бы купить</Button>
                            }
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