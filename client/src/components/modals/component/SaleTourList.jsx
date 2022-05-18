import React, { useContext } from 'react';
import {observer} from "mobx-react-lite";
import { Row } from 'react-bootstrap';
import SaleTourItem from './SaleTourItem';
import { Context } from '../../..';

const SaleTourList = observer(() => {
    const {sale} = useContext(Context)

    return (
        <Row className="d-flex">
            {sale.sale.sale.map(data =>
                <SaleTourItem key={data.id} sale={data} />
            )}
        </Row>
    );
});

export default SaleTourList;