import React, { Component } from 'react';
import logo from './assets/globant-shops.svg'
import Products from './components/Products';
import products from './api/mock-products';
import Filter from './components/Filter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: products
    }
  }

  render() {
    return (
      <div className="grid-container">
        <header>
          <img src={logo} alt="Globant shops" />
          <a href="/">React Shopping cart</a>
        </header>
        <main>
          <div className="content">
            <div className="filters">
              <Filter count={this.state.products.length} />
            </div>
            <div className="products-sec">
              <div className="our-products">Our Products:</div>
              <Products products={this.state.products} />
            </div>

          </div>
        </main>
      </div>
    );
  }
}

export default App;
