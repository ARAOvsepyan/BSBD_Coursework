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
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">Уволить сотрудника</h2>
                
            </Card>
        </Container>
    );
}

export default TourPage 