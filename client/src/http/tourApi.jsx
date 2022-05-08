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

export const fetchCountry = async () => {
    const {data} = await $host.get('api/country/')
    return data
}

export const fetchFeeding = async () => {
    const {data} = await $host.get('api/feeding/')
    return data
}

export const fetchReduction = async () => {
    const {data} = await $host.get('api/reduction/')
    return data
}

export const createCountry = async (name) => {
    const {data} = await $authHost.post('api/country/', name)
    return data
}

export const createFeeding = async (name) => {
    const {data} = await $authHost.post('api/feeding/', name)
    return data
}

export const createReduction = async (name) => {
    const {data} = await $authHost.post('api/reduction/', name)
    return data
}