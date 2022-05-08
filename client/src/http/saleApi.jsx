import {$authHost} from "./index";

export const buyTour = async (info) => {
    const {data} = await $authHost.post('api/sale', info)
    return data
}

export const fetchSale = async (id) => {
    const {data} = await $authHost.get('api/sale/' + id)
    return data
}

export const romoveTour = async (info) => {
    const {data} = await $authHost.post('api/return/', info)
    return data
}