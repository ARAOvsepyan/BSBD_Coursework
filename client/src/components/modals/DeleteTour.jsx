import React, {useContext, useState, useEffect} from 'react';
import Modal from "react-bootstrap/Modal";
import { Button, Dropdown} from "react-bootstrap";
import { Context } from '../..';
import { deleteTour, fetchTour } from '../../http/tourApi';

const DeleteTour = ({show, onHide}) => {
    const {tour} = useContext(Context)
    const [title, setTitle] = useState('')


    useEffect(() => {
        fetchTour().then(data => {tour.setTour(data)})
    }, [tour])

    const removeTure = () => {
        try {
            deleteTour(title).then(() => {
                setTitle('')
                onHide()
            })
        } catch (error) {
            alert(error)
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
                    Удалить тур
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{title || 'Выберите тур'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {tour.tour.map(type =>
                                <Dropdown.Item
                                    onClick={() => setTitle(type.tour_name)}
                                    key={type.id}
                                >
                                    {type.tour_name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={removeTure}>Удалить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteTour;