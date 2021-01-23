import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { Link } from 'react-router-dom';

const Product = ({ product, onAddToCartClicked, onSeeDetailsClicked }) => (
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
        <Link to={`/${product.id}`} style={{ width: "100%" }}>
          <Button className={"button blue"} label={"See details"} onHandleClick={onSeeDetailsClicked} />
        </Link>
        <Button className={"button green"} label={"Add to cart"} onHandleClick={onAddToCartClicked} />
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
  onSeeDetailsClicked: PropTypes.func.isRequired
};

export default Product;
