import { useEffect, useState } from "react";
import axios from "axios";
import SkeletonLoader from "react-loading-skeleton";
import CardProducts from '../../components/cardProducts/CardProducts';
// import api from "../../services/api";

const page = 2
const rows = 8;
const sortBy = "id";
const orderBy = "ASC";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiUrl = `https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`;

  // const apiUrl = `https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=2&rows=5&sortBy=id&orderBy=DESC `;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(apiUrl);
        // console.log("AQUI >>>>>>>>", typeof products, products);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [apiUrl, products]);

  return (
    <div>
      {loading ? <SkeletonLoader /> : <CardProducts products={products} />}
      <h1>Componente ProductPage</h1>
    </div>
  );
};

export default ProductPage;
