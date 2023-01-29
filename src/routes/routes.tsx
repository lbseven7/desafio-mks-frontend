import { Routes, Route } from "react-router-dom";
import Home from '../components/home/Home';
import Checkout from '../components/checkout/Checkout';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default MainRoutes;

