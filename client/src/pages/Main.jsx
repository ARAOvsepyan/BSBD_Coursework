import React, { useContext, useEffect } from 'react'
import { Context } from '../index';
import { fetchTour } from '../http/tourApi'
import TourList from '../components/TourList';


const Main = () => {    
    const {tour} = useContext(Context)

    useEffect(() => {
        fetchTour().then(data => {tour.setTour(data)})
    }, [tour])

    return (
        <TourList />
    )
}

export default Main