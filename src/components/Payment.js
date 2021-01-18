import React, { Component } from 'react'
import { connect } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';
import { clearOrder, createOrder } from '../actions/orderActions';
import CartItem from '../components/CartItems'
import Button from './Button';
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
            <div className="payment">
                <div className="payment-container">

                    <form onSubmit={this.createOrder}>
                        <div className="payment-form">
                            <fieldset>
                                <legend>Shipping data</legend>
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
                            </fieldset>
                            <fieldset>
                                <legend>Credit card data:</legend>
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
                            </fieldset>
                        </div>

                        <div className="payment-products">
                            <p>Products</p>
                            <ul className="cart-list">
                                {cartItems.map((item) => (
                                    <CartItem
                                        key={item.id}
                                        cartItems={item}
                                        onRemoveFromCart={() =>
                                            this.props.removeFromCart(item)
                                        }
                                    />
                                ))}
                            </ul>
                            {cartItems.length === 0 ? (<h3 style={{ textAlign: "center" }}>Now your cart is empty</h3>
                            ) : (
                                    <div>
                                        <div className="subtotal" >{`Subtotal: $${cartItems.reduce((a, c) => a + c.price * c.count, 0)}`}</div>
                                        <Button label={"Pay now"} className={"button green"} />
                                    </div>
                                )}
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect((state) => ({
    cartItems: state.cart.cartItems,
}),
    { removeFromCart },
)(Payment);