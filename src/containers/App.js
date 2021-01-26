import React, { Component } from "react";
import logo from "../assets/globant-shops.svg";
import Filters from "./FilterContainer";
import Payment from "./PaymentContainer";
import store from "../store";
import { Provider } from "react-redux";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import ProductDetailContainer from "./ProductDetailContainer";
import { Route, Switch } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Provider store={store}>

        <div className="grid-container">

          <header>
            <img src={logo} alt="Globant shops" />
            <CartContainer />
          </header>

          <main>
            <Switch>
              <Route path="/products" render={() =>
                <div className="content">
                  <Filters />
                  <ProductsContainer />
                </div>
              } />
              <Route path="/payment" component={Payment} />
              <Route path="/:productId" component={ProductDetailContainer} />
            </Switch>
          </main>

        </div>

      </Provider>
    );
  }
}

export default App;
