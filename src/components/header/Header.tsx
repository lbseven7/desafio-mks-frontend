import React from "react";
import { Container, Title, CartBtn } from "./headerStyle";
import { FaShoppingCart } from "react-icons/fa";
// import ProductCart from "../modal/Modal";

const Header: React.FC = () => {
  return (
    <Container>
      <Title>
        MKS<span>Sistemas</span>
      </Title>
      <CartBtn href="/checkout">
        <span>
          <FaShoppingCart /> 0
        </span>
      </CartBtn>
      {/* <ProductCart product={ product } /> */}
    </Container>
  );
};

export default Header;
