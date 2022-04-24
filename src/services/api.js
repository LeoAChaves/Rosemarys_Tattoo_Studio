import axios from 'axios'

export const apiCliente = axios.create({
    baseURL: 'https://tatto-cliente.herokuapp.com/'
})

