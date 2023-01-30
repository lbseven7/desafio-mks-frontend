import styled from "styled-components";

export const Container = styled.header`
  background-color: #0f52ba;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  height: 101px;
  position: relative;
  width: 100vw;
  width: 116em;
  height: 101px;
  /* left: -10px; */
  top: -8px;
`;

/** MKS */
export const Title = styled.h1`
  /* position: absolute; */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 19px;
  mix-blend-mode: normal;
  margin-left: 65px;

  > span {
    font-weight: 100;
    font-size: 18px;
    margin-left: 0.5rem;
    font-family: "Montserrat", sans-serif;
    /* width: 200px; */
    /* height: 44px; */
    margin-top: 45px;
    margin-bottom: 12px;
    left: 165px;
  }
`;

export const CartBtn = styled.a`
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
  }
`;
