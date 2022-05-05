import React, {useState, useContext} from 'react';
import {Context} from "../index"
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, MAIN_ROUTE} from "../utils/consts";
import { registration } from '../http/userAPI';

const Registration = () => {
    const navigate = useNavigate()
    const {user} = useContext(Context)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [patronymic, setPatronymic] = useState('')
    const [passport, setPassport] = useState('')
    const [telephone, setTelephone] = useState('')


    const click = async () => {
        try {
            let data = await registration(email, password, firstname, lastname, patronymic, passport)
            user.setUser(data)
            user.setIsAuth(data.role)
            navigate(MAIN_ROUTE)
        } catch (e) {
            alert("Пользователь c такими данными уже существует")
        }

    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">Регистрация</h2>
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
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти!</NavLink>
                            </div>
                        <Button
                            variant={"outline-success"}
                            onClick={click}
                        >
                            Регистрация
                        </Button>
                    </Row>

                </Form>
            </Card>
        </Container>
    );
}

export default Registration