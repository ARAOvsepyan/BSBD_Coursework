import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import { Context } from '..'
import { fetchSale, romoveTour } from '../http/saleApi'
import { decTourPurchased } from '../http/tourApi'
import { returnMoney } from '../http/walletApi'
import { TOUR_ROUTE } from '../utils/consts'

const Basekt = observer(() => {
    const {user} = useContext(Context)
    const currDate = new Date().toLocaleDateString()

    const [sale, setSale] = useState([])
    const [tour, setTour] = useState([])
    let [quantity, setQuantity] = useState(0)

    const remove = () => {
        if (quantity > 0) {
            const info = new FormData()
            info.append('date', currDate)
            info.append('quantity', quantity)
            info.append('userId', user._user.user.id)
            info.append('tourId',  tour.id)
            try {  
                romoveTour(info)
                returnMoney({price: (tour.price * ((100 - tour.reduction.amount)/100)), userId: user._user.user.id})
                decTourPurchased(user._user.user.id)
            } catch (error) {
              alert('Что то пошло не так')
            }
        } else {
            alert('Вы не можете вернуть 0 туров')
        }
        
    }

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
                                <td>
                                    <span className="btn btn-primary" style={{ margin: '2px' }} onClick={()=>setQuantity(quantity-=1)}>-</span>
                                    <span className="btn btn-info">{quantity}</span>
                                    <span className="btn btn-primary" style={{ margin: '2px' }} onClick={()=>setQuantity(quantity+=1)}>+</span>
                                </td>
                                <Button className="d-flex flex-column align-items-left" style={{width: '200px'}} onClick={()=>remove()}>Вернуть</Button>
                            </Row>
                            
                        }   
                    </Row>
                </Col>
            </Row>
        </Container>
    )   
})

export default Basekt