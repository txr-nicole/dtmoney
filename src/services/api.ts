import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/api", // endereço padrão em todas as requisições
});
