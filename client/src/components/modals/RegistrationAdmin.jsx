import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button} from "react-bootstrap";
import { registration_admin } from '../../http/userAPI';

const RegistrationAdmin = ({show, onHide}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [patronymic, setPatronymic] = useState('')
    const [passport, setPassport] = useState('')
    const [telephone, setTelephone] = useState('')

    const addAdmin = () => {
        try {
            registration_admin(email, password, firstname, lastname, patronymic, passport).then(() => {
                setEmail('')
                setPassword('')
                setFirstname('')
                setLastname('')
                setPatronymic('')
                setPassport('')
                setTelephone('')
                onHide()
            })
        } catch (e) {
            alert("Пользователь c такими данными уже существует")
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
                    Добавить администратора
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Фамилия"
                        value={firstname}
                        onChange={e => setFirstname(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Имя"
                        value={lastname}
                        onChange={e => setLastname(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Отчество"
                        value={patronymic}
                        onChange={e => setPatronymic(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Паспортные данные"
                        value={passport}
                        onChange={e => setPassport(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Телефон"
                        value={telephone}
                        onChange={e => setTelephone(e.target.value)}
                    />
                    </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addAdmin}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default RegistrationAdmin;