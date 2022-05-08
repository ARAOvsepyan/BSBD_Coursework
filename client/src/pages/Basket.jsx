import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col, Button, Nav } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import { Context } from '..'
import { fetchSale } from '../http/saleApi'
import { TOUR_ROUTE } from '../utils/consts'

const Basekt = () => {
    const {user} = useContext(Context)

    const [sale, setSale] = useState([])
    const [tour, setTour] = useState([])

    useEffect(() => {
        fetchSale(user._user.user.id).then(data => {
            setSale(data)
            setTour(data.tour)
        })
    }, [user._user.user.id])

    return(
        <Container className='mt-3'>
            <Row>
                <Col>
                    <Row className="d-flex flex-column align-items-center m-3">
                        {
                            sale.tourId === null ? "Пусто" 
                            : 
                            <Row className="d-flex flex-column m-3">
                                <h1>Ваши туры</h1>
                                <NavLink style={{textDecoration:'none'}} to={TOUR_ROUTE + `/${tour.id}`}>
                                    <h1>{tour.tour_name}</h1> <br/>
                                </NavLink>
                                Количество: {sale.quantity}
                                <Button className="d-flex flex-column align-items-left" style={{width: '200px'}}>Вернуть</Button>
                            </Row>
                            
                        }   
                    </Row>
                </Col>
            </Row>
        </Container>
    )   
}

export default Basekt