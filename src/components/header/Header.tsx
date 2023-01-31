import React from "react";
// import ProductCart from "../modal/Modal";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { Container, Title, CartBtn } from "./headerStyle";

const Header: React.FC = () => {

  const { products } = useSelector((rootReducer: any) => rootReducer.productReducer);
 
  console.log(products)
  return (
    <Container>
      <Title>
        MKS<span>Sistemas</span>
      </Title>
      <CartBtn href="/checkout">
        <span>
          <FaShoppingCart /> {products.length}
        </span>
      </CartBtn>
      {/* <ProductCart product={ product } /> */}
    </Container>
  );
};

export default Header;
