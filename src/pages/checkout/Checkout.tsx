import React, { useContext } from "react";
import Header from "../../components/header/Header";
import { CartContext } from "../../CartContext";
import { Product } from "../../interfaces/Product";

function Checkout() {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <Header />
      <div>
        <h1>Checkout</h1>
        <ul>
          {cartItems.map((item: Product) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Checkout;


