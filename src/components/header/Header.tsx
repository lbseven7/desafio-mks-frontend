import React from "react";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

const Container = styled.header`
  background-color: #0f52ba;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  height: 101px;
`;

const Title = styled.h1`
  margin: 0;
`;

const Icon = styled(FaShoppingCart)`
  /* color: #fff; */
  /* width: 19px; */
`;

const CartBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #000000;
  background-color: #fff;
  height: 45px;
  width: 90px;
  left: 1262px;
  top: 29px;
  border-radius: 8px;

  > span {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    /* width: 13px; */
  }
`;

const Header: React.FC = () => {
  return (
    <Container>
      <Title>MKS</Title>
      <CartBtn href="/checkout">
        <span>
          <Icon /> 0{" "}
        </span>
      </CartBtn>
    </Container>
  );
};

export default Header;
