import React from "react";
import PropTypes from "prop-types";
import recycleBin from "../assets/recycle-bin.png";

const CartItem = ({ cartItems, onRemoveFromCart }) => (
  <li key={cartItems.id} className="cart-items">
    <img src={cartItems.img} alt={cartItems.title} />
    <div>{cartItems.name}</div>
    <div>{`$${cartItems.price} x ${cartItems.count}`}</div>
    <input
      type="image"
      alt="trash can"
      src={recycleBin}
      onClick={onRemoveFromCart}
      className="recycle-btn"
    />
  </li>
);

CartItem.propTypes = {
  cartItems: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    })
  ),
  onRemoveFromCart: PropTypes.func.isRequired,
};

export default CartItem;
