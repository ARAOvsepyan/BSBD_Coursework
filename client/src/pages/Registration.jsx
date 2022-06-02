import React, {useState, useContext} from 'react';
import {Context} from "../index"
import {Container, Form, Dropdown, ButtonGroup} from "react-bootstrap";
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
                <h2 className="m-auto">Уволить сотрудника</h2>
                
            </Card>
        </Container>
    );
}

export default Registration