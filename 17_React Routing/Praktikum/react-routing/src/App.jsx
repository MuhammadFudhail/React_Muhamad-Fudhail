
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import CreateProduct from './CreateProduct';


import './Landing.css';
import ProductDetailsPage from './ProductDetail';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/detail-product" element={<ProductDetailsPage />} />
        <Route path="/detail-product/:id" element={<ProductDetailsPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;