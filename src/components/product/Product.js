import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { img, name, seller, price, stock, key } = props.items;
  return (
    <div className="products">
      <div className="product-image">
        <img src={img} alt="Product Images"></img>
      </div>
      <div className="product-details">
        <h1>
          <Link to={"/product/" + key}>{name}</Link>
        </h1>
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
        {props.showAddToCartBtn === true && (
          <button
            className="button"
            onClick={() => props.addToCart(props.items)}
          >
            <FontAwesomeIcon icon={faCartPlus} />
            <b> Add to Cart</b>
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
