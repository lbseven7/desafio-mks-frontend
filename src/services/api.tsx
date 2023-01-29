import axios from "axios";

const page = 1;
const rows = 5;
const sortBy = "id";
const orderBy = "DESC";


const api = axios.create({
  baseURL: `https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?
  page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`
});

export default api;