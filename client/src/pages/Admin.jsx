import React, {useState} from 'react'
import { Button, Container } from 'react-bootstrap'
import CreateCountry from '../components/modals/CreateCountry'
import CreateReduction from '../components/modals/CreateReduction'
import CreateTure from '../components/modals/CreateTour'
import DeleteTour from '../components/modals/DeleteTour'
import RegistrationAdmin from '../components/modals/RegistrationAdmin'
import UpdateTour from '../components/modals/UpdateTour'

const Admin = () => {
    const [createTourVisible, setCreateTourVisible] = useState(false)
    const [deleteTourVisible, setDeleteTourVisible] = useState(false)
    const [updateTourVisible, setUpdateTourVisible] = useState(false)
    const [countryVisible, setCountryVisible] = useState(false)
    const [reductionVisible, setReductionVisible] = useState(false)
    const [registrationVisible, setRegistrationVisible] = useState(false)


    return(
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setCountryVisible(true)}
            >
                Добавить страну
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setReductionVisible(true)}
            >
                Добавить скидку
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setCreateTourVisible(true)}
            >
                Добавить тур
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setUpdateTourVisible(true)}
            >
                Изменить тур
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setDeleteTourVisible(true)}
            >
                Удалить тур
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setRegistrationVisible(true)}
            >
                Добавить администратора
            </Button>
            <CreateTure show={createTourVisible} onHide={() => setCreateTourVisible(false)}/>
            <DeleteTour show={deleteTourVisible} onHide={() => setDeleteTourVisible(false)}/>
            <UpdateTour show={updateTourVisible} onHide={() => setUpdateTourVisible(false)}/>
            <CreateCountry show={countryVisible} onHide={() => setCountryVisible(false)}/>
            <CreateReduction show={reductionVisible} onHide={() => setReductionVisible(false)}/>
            <RegistrationAdmin show={registrationVisible} onHide={() => setRegistrationVisible(false)}/>
        </Container>
    )
}

export default Admin