import React, {useState, useContext} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button} from "react-bootstrap";
import { Context } from '../..';
import { addMoney } from '../../http/walletApi';

const AddMoney = ({show, onHide}) => {
    const {user} = useContext(Context)
    const [value, setValue] = useState('')

    const add = () => {
        try {
            addMoney({value: value, userId: user._user.user.id}).then(() => {
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
                    Ваш кошелек <br />
                    Баланс: {user.balance.value}
                </Modal.Title>
                
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(Number(e.target.value))}
                        placeholder={"Сумма пополнения"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={add}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddMoney;