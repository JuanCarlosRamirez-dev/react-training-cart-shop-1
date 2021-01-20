import React from "react";
import PropTypes from "prop-types";
import cartImg from "../assets/cart.svg";

const CartHeader = ({ onHandleClick, cartItems }) => (
    <div>
        <input
            type="image"
            src={cartImg}
            alt="Cart"
            onClick={onHandleClick}
        />
        <p href="/" className="counter-circle">
            {cartItems.length === 0 ? (
                <span>0</span>
            ) : (
                    <span>{cartItems.length}</span>
                )}
        </p>
    </div>
)

CartHeader.propTypes = {
    cartItems: PropTypes.array.isRequired,
    onHandleClick: PropTypes.func.isRequired,
}

export default CartHeader