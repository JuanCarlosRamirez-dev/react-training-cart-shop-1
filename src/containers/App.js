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

  /* createOrder = (order) => {
    alert('created' + order.name)
  } */

  /* removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({ cartItems: cartItems.filter(x => x.id !== product.id) })
    localStorage.setItem("cartItems", JSON.stringify(cartItems.filter(x => x.id !== product.id)));
  } */

  /*  addToCart = (product) => {
     const cartItems = this.state.cartItems.slice();
     let alreadyInCart = false;
     cartItems.forEach(item => {
       if (item.id === product.id) {
         item.count += 1;
         alreadyInCart = true;
       }
     });
     if (!alreadyInCart) {
       cartItems.push({ ...product, count: 1 })
     }
     this.setState({ cartItems });
     localStorage.setItem("cartItems", JSON.stringify(cartItems));
     console.log(product)
   } */

  render() {
    return (
      <Provider store={store}>
        <div className="grid-container">
          <header>
            <img src={logo} alt="Globant shops" />
            <CartContainer toggleCheckoutForm={this.toggleCheckoutForm} />
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
