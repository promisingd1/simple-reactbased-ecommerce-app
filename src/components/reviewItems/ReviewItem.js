import React from "react";

const ReviewItem = (props) => {
  const { name, quantity, key } = props.product;
  const reviewItemsStyle = {
    margin: "1rem",
  };
  return (
    <div style={reviewItemsStyle}>
      <h1>{name}</h1>
      <p>Quantity: {quantity}</p>
      <button className="button" onClick={() => props.removeCartItem(key)}>
        Remove Items
      </button>
    </div>
  );
};

export default ReviewItem;
