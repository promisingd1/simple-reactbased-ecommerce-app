import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  // console.log(props.addToCartEventHandler);
  const { img, name, seller, price, stock, url } = props.items;
  return (
    <div className="products">
      <div className="product-image">
        <img src={img} alt="Product Images"></img>
      </div>
      <div className="product-details">
        <a href={url}>
          <h1>{name}</h1>
        </a>
        <p>
          <small>by: {seller}</small>
        </p>
        <p>
          Price: <strong>${price}</strong>
        </p>
        <p>
          <small>
            Only <strong>{stock}</strong> piece available. Order soon.
          </small>
        </p>
        <button
          className="cart-button"
          onClick={() => props.addToCartEventHandler(props.items)}
        >
          <FontAwesomeIcon icon={faCartPlus} />
          <b> Add to Cart</b>
        </button>
      </div>
    </div>
  );
};

export default Product;
