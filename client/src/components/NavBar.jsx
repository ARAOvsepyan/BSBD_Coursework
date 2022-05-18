import React, { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import { Navbar, Button, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, MAIN_ROUTE } from "../utils/consts";
import { useNavigate } from "react-router";
import { observer } from "mobx-react-lite";
import { getWallet } from "../http/walletApi";
import AddMoney from "./modals/AddMoney";


const NavBar = observer(() => {
    const [balance, setBalanceVisible] = useState(false)
    const {user} = useContext(Context)

    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth('')
        user.setBalance(0)
        localStorage.removeItem('token')
        navigate(LOGIN_ROUTE)
    }

    useEffect(() => {
        try {
            getWallet(user.user.user.id).then(data => user.setBalance(data))
        } catch (error) {
            return
        }
        
    }, [user])

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink  style={{color:'white'}} to={MAIN_ROUTE}>Тур Агентсво</NavLink>
                {user.isAuth === "ADMIN" ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate(ADMIN_ROUTE)}
                            className="m-2"
                        >
                            Админ панель
                        </Button>
 
                        <Button
                            variant={"outline-light"}
                            className="m-2"
                            onClick={logOut}
                        >
                            Выйти
                        </Button>
                      
                    </Nav>
                    : user.isAuth === "USER" ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate(BASKET_ROUTE)}
                            className='m-2'
                        >
                            Мои туры
                        </Button>
                        <Button
                            variant={"outline-light"}
                            className="m-2"
                            onClick={logOut}
                        >
                            Выйти
                        </Button>
                        <Button
                            variant={"outline-light"}
                            className="m-2"
                            onClick={() => setBalanceVisible(true)}
                        >
                            Баланс: {user.balance.value}
                        </Button>
                    </Nav>
                                           
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
            <AddMoney  show={balance} onHide={() => setBalanceVisible(false)} />
        </Navbar>
        
    );
})

export default NavBar;