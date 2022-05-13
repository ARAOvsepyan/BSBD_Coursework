import React, {useState} from 'react';

import { createCountry } from '../../http/tourApi';

import Modal from "react-bootstrap/Modal";
import {Form, Button} from "react-bootstrap";

const CreateCountry = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addCountry = () => {
        try {
            createCountry({name: value}).then(() => {
                setValue('')
                onHide()
            })
        } catch (error) {
            alert(error.response.message)
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
                    Добавить страну
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название страны"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addCountry}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateCountry;