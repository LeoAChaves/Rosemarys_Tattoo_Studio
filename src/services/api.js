import axios from "axios";

export const apiCliente = axios.create({
  baseURL: "https://tatto-cliente.herokuapp.com/",
});

export const apiAgenda = axios.create({
  baseURL: "https://rosemary-leo-api.herokuapp.com",
});

export const apiEstoque = axios.create({
  baseURL: "https://rest-api-rosemarys-estoque.herokuapp.com",
});

export const apiPortfolio = axios.create({
  baseURL: "https://rest-api-rosemarys-portfolio.herokuapp.com",
});
