import { $authHost } from "./index";

export const addMoney = async (value) => {
    const {data} = await $authHost.post('api/wallet/', value)
    return data
}

export const getWallet = async (id) => {
    const {data} = await $authHost.get('api/wallet/' + id)
    return data
}

export const getMoney = async (value) => {
    const {data} = await $authHost.post('api/wallet/buy', value)
    return data
}

export const returnMoney = async (value) => {
    const {data} = await $authHost.post('api/wallet/return', value)
    return data
}