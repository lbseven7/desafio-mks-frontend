import axios from "axios";

// const page = 2
// const rows = 8;
// const sortBy = "id";
// const orderBy = "DESC";


const URL = 'https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=2&rows=5&sortBy=id&orderBy=DESC';
// const apiUrl = `https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`;

const fetchProducts = axios.get(URL)
  .then(res => {
    const products = res.data.products;
    console.log(products);
  })
  .catch(error => {
    console.error(error);
  });


export default fetchProducts;