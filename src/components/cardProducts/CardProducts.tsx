import React from "react";
import { Container, ProductItemStyle } from "./style/productStyle";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  photo: string;
}

interface Props {
  products: Product[];
}

const CardProducts: React.FC<Props> = ({ products }) => {
  return (
    <Container>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <ProductItemStyle>
              <img src={product.photo} alt={product.name} />
              <div>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <p>{product.description}</p>
                <button>COMPRAR</button>
              </div>
            </ProductItemStyle>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default CardProducts;
