import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../actions/cartActions";
import recycleBin from "../assets/recycle-bin.png";

const Cart = ({ cartItems, onRemoveFromCart, onCheckoutForm }) => (
  <div>
    <div className="subtotal">{`Subtotal: $${cartItems.reduce(
      (a, c) => a + c.price * c.count,
      0
    )}`}</div>
    <button onClick={onCheckoutForm} className="button blue">
      Proceed to payment
    </button>
    <ul className="cart-list">
      {cartItems.map((item) => (
        <li key={item.id} className="cart-items">
          <img src={item.img} alt={item.title} />
          <div>{item.name}</div>
          <div>{`$${item.price} x ${item.count}`}</div>
          <input
            type="image"
            alt="trash can"
            src={recycleBin}
            onClick={() => removeFromCart(this.props.cartItems)}
            className="recycle-btn"
          />
        </li>
      ))}
    </ul>
    <div className="subtotal">{`Subtotal: $${cartItems.reduce(
      (a, c) => a + c.price * c.count,
      0
    )}`}</div>
    <button onClick={onCheckoutForm} className="button blue">
      Proceed to payment
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, { removeFromCart })(Cart);
