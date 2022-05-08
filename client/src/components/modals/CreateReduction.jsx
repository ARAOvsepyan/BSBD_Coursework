import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button} from "react-bootstrap";
import { createReduction } from '../../http/tourApi';

const CreateReduction = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addReduction = () => {
        try {
            createReduction({amount: value}).then(() => {
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
                    Добавить скидку
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите размер скидки"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addReduction}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateReduction;