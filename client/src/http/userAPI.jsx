import {$authHost, $host} from "./index";
import jwt_decode from  'jwt-decode'

export const registration = async (login, password, firs_name, last_name, patronymic, passport) => {
    const {data} = await $host.post('api/user/registration', {
        login,
        password,
        firs_name,
        last_name,
        patronymic,
        passport
    })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const registration_admin = async (login, password, firs_name, last_name, patronymic, passport) => {
    const {data} = await $authHost.post('api/user/registration_admin', {
        login,
        password,
        firs_name,
        last_name,
        patronymic,
        passport
    })
    return jwt_decode(data.token)
}

export const login = async (login, password) => {
    const {data} = await $host.post('api/user/login', {login, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}