import React, { Component } from 'react';
import cartImg from '../assets/cart.svg';
import closeBtn from '../assets/close.png';
import recycleBin from '../assets/recycle-bin.png';

export default class Cart extends Component {
    constructor() {
        super();
        this.state = {
            displaySidebar: false,
        }
    }

    toggleCart() {
        if (!this.state.displaySidebar) {
            this.setState({ displaySidebar: true })
        }
        else {
            this.setState({ displaySidebar: false })
        }
    }

    render() {
        const { cartItems } = this.props;
        return (
            <div className="cart" >
                <input
                    value={this.state.displaySidebar ? true : false}
                    type="image"
                    src={cartImg}
                    alt="Cart"
                    onClick={() => this.toggleCart()}
                />
                <p href="/" className="counter-circle">
                    {cartItems.length === 0 ? <span>0</span> : <span>{cartItems.length}</span>}
                </p>

                <div className={this.state.displaySidebar ? 'display' : 'hide'}>
                    <div className="cart-sidebar">
                        <div className="modal"></div>
                        <div className="sidebar-content">
                            <div className="cart-header">
                                <p>Cart:</p>
                                <input
                                    onClick={() => this.toggleCart()}
                                    type="image"
                                    className="close-btn"
                                    src={closeBtn}
                                    alt="close button"
                                    value={this.state.displaySidebar ? true : false} />
                            </div>

                            <div className="subtotal" >{`Subtotal: $${cartItems.reduce((a, c) => a + c.price * c.count, 0)}`}</div>
                            <button onClick={() => this.props.toggleCheckoutForm()} className="button blue">Proceed to payment</button>
                            <ul className="cart-list">
                                {cartItems.map(item => (
                                    <li key={item.id} className="cart-items">

                                        <img src={item.image} alt={item.title} />
                                        <div>{item.name}</div>
                                        <div>{`$${item.price} x ${item.count}`}</div>
                                        <input
                                            type="image"
                                            alt="trash can"
                                            src={recycleBin}
                                            onClick={() => this.props.removeFromCart(item)}
                                            className="recycle-btn" />
                                    </li>
                                ))}
                            </ul>
                            <div className="subtotal" >{`Subtotal: $${cartItems.reduce((a, c) => a + c.price * c.count, 0)}`}</div>
                            <button onClick={() => this.props.toggleCheckoutForm()} className="button blue">Proceed to payment</button>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
