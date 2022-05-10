import React, { useState, useContext } from 'react'
import {Context} from "../index"
import { login } from '../http/userAPI'
import {useNavigate} from 'react-router-dom'
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink} from "react-router-dom";
import {REGISTRATION_ROUTE, MAIN_ROUTE} from "../utils/consts";
import { observer } from 'mobx-react-lite';

const Auth = observer(() => {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data = await login(email, password)
            user.setUser(data)
            user.setIsAuth(data.role)
            navigate(MAIN_ROUTE)
        } catch (e) {
            alert("Пользователь не найден")
        }

    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">Авторизация</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        <div>
                            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегестрироваться!</NavLink>
                        </div>
                    </Row>
                    <Button
                        size='sm'
                        variant={"success"}
                        onClick={click}
                    >
                        {'Войти'}
                    </Button>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;