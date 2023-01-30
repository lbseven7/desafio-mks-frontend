import { useState } from "react";
import styled from "styled-components";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  photo: string;
}

interface Props {
  // isOpen: boolean;
  product: Product;
}

interface OrderSummaryModalProps {
  isOpen: boolean;
}

const OrderSummaryModal = styled.div<OrderSummaryModalProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: visibility 0s linear 0.3s, opacity 0.3s linear;

  .modal-content {
    background-color: white;
    padding: 20px;
    width: 80%;
    max-width: 500px;
    border-radius: 5px;
    text-align: center;
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
`;

const ProductCart: React.FC<Props> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Comprar</button>
      <OrderSummaryModal isOpen={isModalOpen}>
        <div className="modal-content">
          <h3>Carrinho de compras</h3>
          <img src={product.photo} alt={product.name} />
          <p>Nome do Produto: {product.name}</p>
          <p>Preço: {product.price}</p>
          <button
            className="close-button"
            onClick={() => setIsModalOpen(false)}
          >
            Fechar
          </button>
        </div>
      </OrderSummaryModal>
    </>
  );
};

export default ProductCart;
