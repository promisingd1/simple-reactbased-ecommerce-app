import React from "react";
import "./Cart.css";

const Cart = (props) => {
  // console.log(props.cart);
  const cart = props.cart;
  const itemTotal = cart.reduce((total, product) => total + product.price, 0);
  let shippingCost = 0;
  if (itemTotal > 30 && itemTotal <= 50) {
    shippingCost = 5;
  } else if (itemTotal > 50 && itemTotal <= 100) {
    shippingCost = 10;
  } else if (itemTotal > 100) {
    shippingCost = 15;
  }

  const tax = (itemTotal * 15) / 100;

  const totalPrice = itemTotal + shippingCost + tax;

  function formatNumber(num) {
    const precision = num.toFixed(2);
    return Number(precision);
  }

  return (
    <div className="cart">
      <h1>Order Summary</h1>

      <table>
        <caption>
          <strong>Items Ordered: {cart.length}</strong>
        </caption>
        <tbody>
          <tr>
            <td>Item Price</td>
            <td>
              <b>{formatNumber(itemTotal)}</b>
            </td>
          </tr>
          <tr>
            <td>Shipping Cost</td>
            <td>
              <b>{shippingCost}</b>
            </td>
          </tr>
          <tr>
            <td>Tax (15% of Item Price):</td>
            <td>{formatNumber(tax)}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>{formatNumber(totalPrice)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Cart;
