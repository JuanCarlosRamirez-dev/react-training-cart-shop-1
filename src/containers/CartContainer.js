import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../actions/cartActions";
import closeBtn from "../assets/close.png";
import Cart from "../components/CartItems";
import PropTypes from "prop-types";
import Button from "../components/Button";
import CartHeader from "../components/CartHeader";
class CartContainer extends Component {
  constructor() {
    super();
    this.state = {
      displaySidebar: false,
    };
  }

  toggleCart() {
    if (!this.state.displaySidebar) {
      this.setState({ displaySidebar: true });
    } else {
      this.setState({ displaySidebar: false });
    }
  }

  render() {
    const { cartItems } = this.props;
    return (
      <div>
        <div className="cart">
          <CartHeader
            onHandleClick={() => this.toggleCart()}
            cartItems={cartItems}
          />

          <div className={this.state.displaySidebar ? "display" : "hide"}>
            <div className="cart-sidebar">
              <div className="modal"></div>
              <div className="sidebar-content">
                <div className="cart-content">
                  <p>Cart:</p>
                  <input
                    onClick={() => this.toggleCart()}
                    type="image"
                    className="close-btn"
                    src={closeBtn}
                    alt="close button"
                  />
                </div>
                {cartItems.length === 0 ? (
                  <h3 style={{ textAlign: "center" }}>
                    Please add some products to your cart
                  </h3>
                ) : (
                    <div>
                      <div className="subtotal">{`Subtotal: $${cartItems.reduce(
                        (a, c) => a + c.price * c.count,
                        0
                      )}`}</div>
                      <Button
                        label={"Proceed to payment"}
                        className={"button blue"}
                      />

                      <ul className="cart-list">
                        {cartItems.map((item) => (
                          <Cart
                            key={item.id}
                            cartItems={item}
                            onRemoveFromCart={() =>
                              this.props.removeFromCart(item)
                            }
                          />
                        ))}
                      </ul>

                      <div className="subtotal">{`Subtotal: $${cartItems.reduce(
                        (a, c) => a + c.price * c.count,
                        0
                      )}`}</div>
                      <Button
                        label={"Proceed to payment"}
                        className={"button blue"}
                      />
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CartContainer.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    })
  ),
  removeFromCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  order: state.order.order,
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, { removeFromCart })(CartContainer);
