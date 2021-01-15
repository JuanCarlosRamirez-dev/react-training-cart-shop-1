import React, { Component } from 'react'
import { connect } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';
import { clearOrder, createOrder } from '../actions/orderActions';
import recycleBin from '../assets/recycle-bin.png';

class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            lastName: "",
            addres: "",
            city: "",
            state: "",
            zipcode: "",
            phoneNumber: "",
            creditCard: "",
            fullName: "",
            expDate: "",
            cvv: ""
        }
    }
    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: this.state.name,
            lastName: this.state.lastName,
            addres: this.state.addres,
            city: this.state.city,
            state: this.state.state,
            zipcode: this.state.zipcode,
            phoneNumber: this.state.phoneNumber,
            creditCard: this.state.creditCard,
            fullName: this.state.fullName,
            expDate: this.state.expDate,
            cvv: this.state.cvv,
            cartItems: this.props.cartItems,
            total: this.props.cartItems.reduce((a, c) => (a + c.price * c.count), 0)
        }
        this.props.createOrder(order)
    }

    render() {
        const { cartItems } = this.props;
        return (
            <div className="payment-form">
                <div className="shipping">

                    <form onSubmit={this.createOrder}>
                        <p>Shipping data</p>
                        <ul>
                            <li>
                                <label>Name</label>
                                <input
                                    name="name"
                                    type="text" required
                                    onChange={this.handleInput} />
                            </li>
                            <li>
                                <label>Last name</label>
                                <input
                                    name="lastName"
                                    type="text" required
                                    onChange={this.handleInput} />
                            </li>
                            <li>
                                <label>Adress</label>
                                <input
                                    name="adress"
                                    type="text" required
                                    onChange={this.handleInput} />
                            </li>
                            <li>
                                <label>City</label>
                                <input
                                    name="city"
                                    type="text" required
                                    onChange={this.handleInput} />
                            </li>
                            <li>
                                <label>State</label>
                                <input
                                    name="state"
                                    type="text" required
                                    onChange={this.handleInput} />
                            </li>
                            <li>
                                <label>Zip code</label>
                                <input
                                    name="zipcode"
                                    type="text" required
                                    onChange={this.handleInput} />
                            </li>
                            <li>
                                <label>Phone number</label>
                                <input
                                    name="phoneNumber"
                                    type="text" required
                                    onChange={this.handleInput} />
                            </li>
                        </ul>
                        <p>Credit card data:</p>
                        <ul>
                            <li>
                                <label>Credit card number</label>
                                <input
                                    name="creditCard"
                                    type="text" required
                                    onChange={this.handleInput} />
                            </li>
                            <li className="fullName">
                                <label>Fullname</label>
                                <input
                                    name="fullName"
                                    type="text" required
                                    onChange={this.handleInput} />
                            </li>
                            <li>
                                <label>Exp. date</label>
                                <input
                                    name="expDate"
                                    type="text" required
                                    onChange={this.handleInput} />
                            </li>
                            <li>
                                <label>CVV</label>
                                <input
                                    name="cvv"
                                    type="text" required
                                    onChange={this.handleInput} />
                            </li>
                        </ul>

                        <div className="payment-products">
                            <p>Products</p>
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
                            <button type="submit" className="button green ">Pay now</button>
                        </div>
                    </form>


                </div>
            </div>
        )
    }
}

export default connect((state) => ({
    order: state.order.order,
    cartItems: state.cart.cartItems,
}),
    removeFromCart,
    createOrder,
    clearOrder
)(Payment);