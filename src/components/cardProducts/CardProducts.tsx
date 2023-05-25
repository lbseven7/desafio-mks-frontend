import React, { useState, useEffect } from "react";
import { Container, ProductItemStyle } from "./productStyle";
import { Product, Props } from "../../interfaces/Product";
import { useDispatch } from "react-redux";

const CardProducts: React.FC<Props> = ({ products }) => {
  const [modalProducts, setModalProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();

  const addProduct = (id: number) => {
    const product = products.find((product) => product.id === id);
    if (product) {
      setModalProducts([...modalProducts, product]);
      dispatch({ type: "ADD_PRODUCT", payload: product });
    }
  };

  useEffect(() => {
    dispatch({ type: "ADD_PRODUCT", payload: modalProducts });
  }, [modalProducts, dispatch]);

  return (
    <Container>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <ProductItemStyle>
              <img src={product.photo} alt={product.name} />
              <div>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <p>{product.description}</p>
                <button onClick={() => addProduct(product.id)}>COMPRAR</button>
              </div>
            </ProductItemStyle>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default CardProducts;

