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
  // console.log('AQUI>>>>>>>>', products) // Um objeto com os dados do produto [8]
  const productsArray = Object.values(products); // Transforma o objeto em array [8]
  return (
    <Container>
      <ul>
        {productsArray.map((product, index) => (
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
