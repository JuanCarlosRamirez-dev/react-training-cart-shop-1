import React, { Component } from 'react';
import cartImg from '../assets/cart.svg';

export default class Cart extends Component {
    render() {
        const { cartItems } = this.props;
        return (
            <div className="cart" >
                <img src={cartImg} alt="Cart" />
                <p href="/" className="counter-circle">
                    {cartItems.length === 0 ? <span>0</span> : <span>{cartItems.length}</span>}
                </p>
                <div className="cart-sidebar">
                    <div className="modal"></div>
                    <div className="sidebar-content">

                    </div>

                </div>
            </div >
        )
    }
}
