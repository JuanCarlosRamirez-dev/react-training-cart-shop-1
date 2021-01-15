import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../actions/cartActions";
import cartImg from "../assets/cart.svg";
import closeBtn from "../assets/close.png";
import Cart from "../components/Cart";
class CartComponent extends Component {
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
            {!cartItems ? <span>0</span> : <span>{cartItems.length}</span>}
          </p>

          <div className={this.state.displaySidebar ? "display" : "hide"}>
            {!cartItems ? (
              <div>Cart is empty</div>
            ) : (
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
                  <Cart cartItems={cartItems} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  order: state.order.order,
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, {})(CartComponent);
