import React, {useEffect, useContext} from 'react';
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { fetchAllSale } from '../../http/saleApi';
import SaleTourList from './component/SaleTourList';
import { Context } from '../..';

const SaleTour = ({show, onHide}) => {
    const {sale} = useContext(Context)

    useEffect(() =>  {
        fetchAllSale().then(data => {
            sale.setSale(data)
            console.log(sale)
        })
    }, [sale])

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Все купленные туры
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <SaleTourList /> 
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default SaleTour;