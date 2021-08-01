import React, { useEffect, useState } from "react";
import fakeData from "../../assets/fakeData";
import "./Shop.css";
import Product from "../product/Product";
import Cart from "../cart/Cart";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../assets/utilities/databaseManager";
import { NavLink } from "react-router-dom";

const Shop = () => {
  const productArr = fakeData.slice(0, 10);
  const [product, setProduct] = useState(productArr);
  const [cart, setCart] = useState([]);

  // Syncing cart sate with database
  useEffect(() => {
    // Getting data from the database
    const cartItems = getDatabaseCart();
    const cartItemsKey = Object.keys(cartItems);

    // Adding quantity property to product item
    const cartProducts = cartItemsKey.map((key) => {
      const product = fakeData.find((items) => items.key === key);
      product.quantity = cartItems[key];
      return product;
    });
    setCart(cartProducts);
  }, []);

  const addToCart = (product) => {
    let productCount = 1;
    let newCart;

    // Checking if the product added in the cart already exists
    const productAlreadyExist = cart.find((item) => item.key === product.key);

    // Increasing product quantity with each when the product already found
    if (productAlreadyExist) {
      productCount = productAlreadyExist.quantity + 1;
      productAlreadyExist.quantity = productCount;
      const otherProduct = cart.filter(
        (items) => items.key !== productAlreadyExist.key
      );
      newCart = [...otherProduct, productAlreadyExist];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }

    // Updating the cart and saving it to database
    setCart(newCart);
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
