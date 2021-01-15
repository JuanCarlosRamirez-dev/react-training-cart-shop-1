import React, { Component } from "react";
import logo from "../assets/globant-shops.svg";
import Filters from "../components/Filter";
import Payment from "../components/Payment";
import store from "../store";
import { Provider } from "react-redux";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayForm: false,
    };
  }

  toggleCheckoutForm = () => {
    if (!this.state.displayForm) {
      this.setState({ displayForm: true });
    } else {
      this.setState({ displayForm: false });
    }
  };

  render() {
    return (
      <Provider store={store}>
        <div className="grid-container">
          <header>
            <img src={logo} alt="Globant shops" />
            <CartContainer onCheckoutForm={this.toggleCheckoutForm} />
          </header>

          <main>
            <div className={!this.state.displayForm ? "display" : "hide"}>
              <div className="content">
                <Filters />
                <ProductsContainer />
              </div>
            </div>
            {/* <div className={this.state.displayForm ? "display" : "hide"}>
               <Payment
               createOrder={this.createOrder}
                cartItems={this.state.cartItems}
                removeFromCart={this.removeFromCart}  /> 
            </div> */}
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
