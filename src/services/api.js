import axios from "axios";

export const apiCliente = axios.create({
  baseURL: "https://tatto-cliente.herokuapp.com/",
});
export const apiAgenda = axios.create({
  baseURL: "https://rosemary-api-leo.herokuapp.com",
});
