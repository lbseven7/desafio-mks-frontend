import { useEffect, useState } from "react";
import axios from "axios";
import SkeletonLoader from "react-loading-skeleton";
import ProductList from "../../components/products/CardProducts";

const page = 1;
const rows = 10;
const sortBy = "name";
const orderBy = "asc";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiUrl = `https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=
  ${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(apiUrl);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [apiUrl]);

  return (
    <div>
      {loading ? <SkeletonLoader /> : <ProductList products={products} />}
      <h1>Desafio-mks-frontend</h1>
    </div>
  );
};

export default ProductPage;
