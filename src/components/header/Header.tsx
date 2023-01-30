import React from "react";
import { Container, Title, CartBtn } from "./headerStyle"
import { FaShoppingCart } from "react-icons/fa";
const Header: React.FC = () => {
  return (
    <Container>
        <Title>MKS<span>Sistemas</span></Title>
      <CartBtn href="/checkout">
        <span>
          <FaShoppingCart /> 0{" "}
        </span>
      </CartBtn>
    </Container>
  );
};

export default Header;
