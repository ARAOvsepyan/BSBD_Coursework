import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import TourItem from "./TourItem";
import { Row } from 'react-bootstrap';

const TourList = observer(() => {
    const {tour} = useContext(Context)
    
    console.log(tour.tour);

    return (
        <Row className="d-flex">
            {tour.tour.map(tour =>
                <TourItem key={tour.id} tour={tour}/>
            )}
        </Row>
    );
});

export default TourList;