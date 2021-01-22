import React, { Component } from "react";
import logo from "../assets/globant-shops.svg";
import Filters from "../components/Filter";
import Payment from "./PaymentContainer";
import store from "../store";
import { Provider } from "react-redux";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import ProductDetail from "./ProductDetailContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayForm: false,
      displayDetail: false,
    }
  }

  toggleCheckoutForm = () => {
    if (!this.state.displayForm) {
      this.setState({ displayForm: true });
    } else {
      this.setState({ displayForm: false });
    }
  }

  toggleProductDetail = () => {
    if (this.state.displayDetail) {
      this.setState({ displayDetail: false });
    } else {
      this.setState({ displayDetail: true })
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div className="grid-container">
          <header>
            <img src={logo} alt="Globant shops" />
            <div className={!this.state.displayForm ? "display" : "hide"}>
              <CartContainer onCheckoutForm={this.toggleCheckoutForm} />
            </div>
          </header>

          <main>
            <div className={!this.state.displayForm && !this.state.displayDetail ? "display" : "hide"}>
              <div className="content">
                <Filters />
                <ProductsContainer />
              </div>
            </div>
            <div className={this.state.displayForm && !this.state.displayDetail ? "display" : "hide"}>
              <Payment />
            </div>
            <div className={this.state.displayDetail ? "display" : "hide"}>
              <ProductDetail />
            </div>
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
