import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';

const ProductDetails = ( ) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { productName, productCategory, productImage, productFreshness, productDescription, productPrice } = location.state.product;
  console.log(location.state.product);
  console.log('productName =', productName);
  return (
    <div>
      <h1>{productName}</h1>
      <p>Category: {productCategory}</p>
      <img src={productImage} alt={productName} />
      <p>Freshness: {productFreshness}</p>
      <p>Description: {productDescription}</p>
      <p>Price: {productPrice}</p>
      <button className="back" onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default ProductDetails;
