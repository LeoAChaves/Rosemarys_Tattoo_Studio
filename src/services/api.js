import axios from 'axios'

export const apiCliente = axios.create({
    baseURL: 'https://tatto-cliente.herokuapp.com/'
})

export const apiPortifolio = axios.create({
    baseURL: 'https://rest-api-rosemarys-portfolio.herokuapp.com/'
})

export const apiFotos = axios.create({
    baseURL: 'https://fotos-api-func.herokuapp.com/'
})


