import React, { useState } from "react";
import fakeData from "../../assets/fakeData";

import "./Shop.css";
import Product from "../product/Product";
import Cart from "../cart/Cart";

const Shop = () => {
  const productArr = fakeData.slice(0, 10);
  const [product, setProduct] = useState(productArr);
  const [cart, setCart] = useState([]);

  const addToCartEventHandler = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    // console.log(newCart);
  };

  return (
    <main className="shop-container">
      <section className="product-container">
        {product.map((item) => (
          <Product
            key={item.key}
            items={item}
            addToCartEventHandler={addToCartEventHandler}
          ></Product>
        ))}
      </section>
      <aside className="cart-container">
        <Cart cart={cart}></Cart>
      </aside>
    </main>
  );
};

export default Shop;
