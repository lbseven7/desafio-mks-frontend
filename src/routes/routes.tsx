import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Checkout from "../pages/checkout/Checkout";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default MainRoutes;
