import {$authHost, $host} from "./index";

export const createTour = async (tour) => {
    const {data} = await $authHost.post('api/tour', tour)
    return data
}

export const deleteTour = async (title) => {
    const {data} = await $authHost.post('api/tour/' + title)
    return data
}

export const fetchTour = async () => {
    const {data} = await $host.get('api/tour/')
    return data
}

export const fetchOneTour = async (id) => {
    const {data} = await $host.get('api/tour/' + id)
    return data
}