import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button, Dropdown} from "react-bootstrap";
import { createTour, fetchCountry, fetchFeeding, fetchReduction } from '../../http/tourApi';
import { Context } from '../..';

const CreateTure = ({show, onHide}) => {
    const {tour} = useContext(Context)

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [date, setDate] = useState('')
    const [city, setCity] = useState('')
    const [adilts, setAdilts] = useState('')
    const [children, setChildren] = useState('')
    const [days, setDays] = useState('')
    const [nights, setNights] = useState('')
    const [reduction, setReduction] = useState([])
    const [selectedReduction, setSelectedReduction] = useState({})
    const [feeding, setFedding] = useState([])
    const [selectedFeeding, setSelectedFeeding] = useState({})
    const [country, setCountry] = useState([])
    const [selectedCountry, setSelectedCountry] = useState({})
    const [img, setFile] = useState('')

    useEffect(() => {
        fetchReduction().then(data => setReduction(data))
        fetchFeeding().then(data => setFedding(data))
        fetchCountry().then(data => setCountry(data))
    }, [])

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addTure = () => {
        const new_tour = new FormData()
        new_tour.append('tour_name', name)
        new_tour.append('price', `${price}`)
        new_tour.append('date', date)
        new_tour.append('dep_city', city)
        new_tour.append('adilts', `${adilts}`)
        new_tour.append('children', `${children}`)
        new_tour.append('days', `${days}`)
        new_tour.append('nights', `${nights}`)
        new_tour.append('img', img)
        new_tour.append('countryId', selectedCountry.id)
        new_tour.append('feedingId', selectedFeeding.id)
        new_tour.append('reductionId', selectedReduction.id)
        try {
            createTour(new_tour).then(() => {
                setName('')
                setPrice('')
                setDate('')
                setCity('')
                setAdilts('')
                setChildren('')
                setDays('')
                setNights('')
                setReduction('')
                setSelectedReduction('')
                setFedding('')
                setSelectedFeeding('')
                setCountry('')
                setSelectedCountry('')
                setFile('')

            })
        } catch (e) {
            alert(e.target.message)
        }
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить тур
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название тура"
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите стоимость тура"
                        type="number"
                    />
                    <Form.Control
                        value={city}
                        onChange={e => setCity((e.target.value))}
                        className="mt-3"
                        placeholder="Введите город отправки"
                    />
                    <Form.Control
                        value={date}
                        onChange={e => setDate((e.target.value))}
                        className="mt-3"
                        placeholder="Введите город отправки"
                        type="date"
                    />
                    <Form.Control
                        value={adilts}
                        onChange={e => setAdilts(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите количество взрослых"
                        type="number"
                    />
                    <Form.Control
                        value={children}
                        onChange={e => setChildren(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите количество детей"
                        type="number"
                    />
                    <Form.Control
                        value={days}
                        onChange={e => setDays(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите количество дней"
                        type="number"
                    />
                     <Form.Control
                        value={nights}
                        onChange={e => setNights(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите количество ночей"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{selectedReduction.amount >= 0 ? selectedReduction.amount : "Выберите скидку"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {reduction.map(type =>
                                <Dropdown.Item
                                    onClick={() => setSelectedReduction(type)}
                                    key={type.id}
                                >
                                    {type.amount}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <p>Выберите питание</p>
                        <Dropdown.Toggle>{selectedFeeding.type === true ? 'Есть' : 'Нет'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {feeding.map(type =>
                                <Dropdown.Item
                                    onClick={() => setSelectedFeeding(type)}
                                    key={type.id}
                                >
                                    {type.type === true ? 'Есть' : 'Нет'}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{selectedCountry.name || "Выберите страну"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {country.map(type =>
                                <Dropdown.Item
                                    onClick={() => setSelectedCountry(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    
                    <hr/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addTure}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateTure;