import React from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../assets/fakeData";
import Product from "../product/Product";

const ProductDetails = () => {
  const { key } = useParams();
  // Finding the matched product using the key.
  const product = fakeData.find((product) => product.key === key);
  // console.log(key);
  return (
    <div>
      <h1>Product Details: </h1>
      <Product items={product} showAddToCartBtn={false}></Product>
    </div>
  );
};

export default ProductDetails;
