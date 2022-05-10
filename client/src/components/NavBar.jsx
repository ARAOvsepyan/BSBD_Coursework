import React, {useContext} from "react";
import { Context } from "../index";
import { Navbar, Button, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, MAIN_ROUTE } from "../utils/consts";
import { useNavigate } from "react-router";
import { observer } from "mobx-react-lite";


const NavBar = observer(() => {
    const {user} = useContext(Context)

    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth('')
        localStorage.removeItem('token')
        navigate(LOGIN_ROUTE)
    }

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
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
})

export default NavBar;