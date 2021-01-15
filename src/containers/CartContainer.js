import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../actions/cartActions";
import cartImg from "../assets/cart.svg";
import closeBtn from "../assets/close.png";
import Cart from "../components/Cart";
import PropTypes from "prop-types";
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
          <input
            value={this.state.displaySidebar ? true : false}
            type="image"
            src={cartImg}
            alt="Cart"
            onClick={() => this.toggleCart()}
          />
          <p href="/" className="counter-circle">
            {cartItems.length === 0 ? (
              <span>0</span>
            ) : (
              <span>{cartItems.length}</span>
            )}
          </p>

          <div className={this.state.displaySidebar ? "display" : "hide"}>
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
                    value={this.state.displaySidebar ? true : false}
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
                    <button
                      /* onClick={onCheckoutForm} */ className="button blue"
                    >
                      Proceed to payment
                    </button>

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
                    <button
                      /* onClick={onCheckoutForm} */ className="button blue"
                    >
                      Proceed to payment
                    </button>
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
