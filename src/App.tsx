import ProductPage from "./pages/products/index"
import { BrowserRouter as Router } from "react-router-dom";
// import Home from "./components/home/Home";
// import Checkout from "./components/checkout/Checkout";
// import Navigation from "./components/Navigation";


function App() {
  return <div className="App">
    <h1>App aqui</h1>
    <ProductPage />
    {/* <Navigation /> */}
    <Router>
      {/* <Route path="/" element={<Home /> } /> */}
      {/* <Route path="/checkout" element={<Checkout />} /> */}
    </Router>
  </div>;
}

export default App;
