import React, { useState, useContext } from 'react'
import {Context} from "../index"
import { login } from '../http/userAPI'
import {useNavigate} from 'react-router-dom'
import {Container, ListGroup, Form, FormControl} from "react-bootstrap";
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
        <Card style={{width: 700}} className="p-5">
            <h2 className="m-auto">Найти сотрудников департамента</h2>
            <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Впишите название департамента"
          className="me-2 mt-2"
          aria-label="Search"
        />
        <Button className="me-2 mt-2" variant="outline-success">Поиск</Button>
      </Form>
            <ListGroup className='mt-3'>
                <ListGroup.Item>Вакуленко Вадим Игореви</ListGroup.Item>
                <ListGroup.Item>Муравьев Степан Святославович</ListGroup.Item>
                <ListGroup.Item>Титов Максим Саввич</ListGroup.Item>
                <ListGroup.Item>Журавлев Владимир Александрович</ListGroup.Item>
            </ListGroup>
            <Button className="mt-4" variant="success">Еще</Button>
        </Card>
    </Container>
    );
});

export default Auth;