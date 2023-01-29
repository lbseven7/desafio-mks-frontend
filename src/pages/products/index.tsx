import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import SkeletonLoader from "react-loading-skeleton";
import CardProducts from '../../components/cardProducts/CardProducts';

const page = 1;
const rows = 8;
const sortBy = "id";
const orderBy = "ASC";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiUrl = `https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`;


  const fetchProducts = useCallback(async () => {
    try {
      const response = await axios.get(apiUrl);
      setProducts(response.data.products);
      setLoading(false);

    } catch (error) {
      console.error(error);
    }
  }, [apiUrl])

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div>
      {loading ? <SkeletonLoader /> : <CardProducts products={products} />}
      <h1>Componente ProductPage</h1>
    </div>
  );
};

export default ProductPage;
