import React, { useState } from "react";
import fakeData from "../../assets/fakeData";

import "./Shop.css";
import Product from "../product/Product";
import Cart from "../cart/Cart";
import { addToDatabaseCart } from "../../assets/utilities/databaseManager";
import { NavLink } from "react-router-dom";

const Shop = () => {
  const productArr = fakeData.slice(0, 10);
  const [product, setProduct] = useState(productArr);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);

    // Saving the cart items to local storage
    const matchedProduct = newCart.filter((item) => item.key === product.key);
    const productCount = matchedProduct.length;
    addToDatabaseCart(product.key, productCount);
  };

  return (
    <main className="container">
      <section className="product-container">
        {product.map((item) => (
          <Product
            key={item.key}
            items={item}
            showAddToCartBtn={true}
            addToCart={addToCart}
          ></Product>
        ))}
      </section>
      <aside className="cart-container">
        <Cart cart={cart}>
          <NavLink to="/order-review">
            <button className="button">Review Order</button>
          </NavLink>
        </Cart>
      </aside>
    </main>
  );
};

export default Shop;
