import React, { useEffect, useState } from "react";
import fakeData from "../../assets/fakeData";
import {
  getDatabaseCart,
  processOrder,
  removeFromDatabaseCart,
} from "../../assets/utilities/databaseManager";
import Cart from "../cart/Cart";
import ReviewItem from "../reviewItems/ReviewItem";
import orderConfirmed from "../../assets/images/giphy.gif";

const Review = () => {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    // Getting cart items from local storage
    const cartItems = getDatabaseCart();
    const cartItemKeys = Object.keys(cartItems);

    // Add new "quantity" property to product object
    const cartProducts = cartItemKeys.map((key) => {
      const product = fakeData.find((items) => items.key === key);
      product.quantity = cartItems[key];
      return product;
    });

    setCart(cartProducts);
  }, []);

  // Removing Cart Items from the local storage and updating Cart
  const removeCartItem = (key) => {
    removeFromDatabaseCart(key);
    const newCartItems = cart.filter((cartItemKey) => cartItemKey !== key);
    setCart(newCartItems);
  };

  // Cleaning Data base after order placement
  const placeOrder = () => {
    setCart([]);
    setOrderPlaced(true);
    processOrder();
  };

  return (
    <div className="container">
      <section className="product-container">
        {cart.map((items) => (
          <ReviewItem
            key={items.key}
            product={items}
            removeCartItem={removeCartItem}
          ></ReviewItem>
        ))}
        {orderPlaced && (
          <img src={orderConfirmed} alt="Order is confirmed"></img>
        )}
      </section>
      <aside className="cart-container">
        <Cart cart={cart}>
          <button className="button" onClick={placeOrder}>
            Place Order
          </button>
        </Cart>
      </aside>
    </div>
  );
};

export default Review;
