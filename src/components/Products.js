import React from "react";
import PropTypes from "prop-types";

const Product = ({ product, onAddToCartClicked }) => (
  <li key={product.id}>
    <div className="product">
      <p className={product.basics ? "basics" : "hide"}> BASICS</p>
      <img src={product.img} alt={product.name} />
      <div className="product-info">
        <p>{product.name}</p>
        <p>Stars and comments</p>
        <div className="product-price">{"$" + product.price}</div>
      </div>
      <div className="buttons">
        <button className="button blue">See details</button>
        <button onClick={onAddToCartClicked} className="button green">
          Add to cart
        </button>
      </div>
    </div>
  </li>
);

Product.propTypes = {
  product: PropTypes.shape({
    basics: PropTypes.bool.isRequired,
    comments: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    rate: PropTypes.string.isRequired,
  }),
  onAddToCartClicked: PropTypes.func.isRequired,
};

export default Product;
