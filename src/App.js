import React, { Component } from 'react';
import logo from './assets/globant-shops.svg'
import Products from './components/Products';
import products from './api/mock-products';
import Filters from './components/Filter';
import Cart from './components/Cart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: products,
      cartItems: [],
      sort: "",
      basics: ""
    }
  }

  addToCart = (product) => {
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
    console.log(product)
  }

  sortProducts = (e) => {
    //mostrar por orden natural
    let sort = e.target.value;
    this.setState(() => ({
      sort: sort,
      products: this.state.products.slice().sort((a, b) =>
        sort === "Lower price" ?
          ((a.price > b.price) ? 1 : -1)
          : sort === "Higher price" ?
            ((a.price < b.price) ? 1 : -1)
            : ((a.id < b.id) ? 1 : -1)

      )
    }))
    console.log(e.target.value)
  }

  filterProducts = (e) => {
    //corregir ambas opciones
    if (e.target.value === "") {
      this.setState({ basics: e.target.value, products: products })
    } else {
      this.setState({
        basics: e.target.value,
        products: products.filter(product => product.basics)
      })
    }
    console.log(e.target.value)
  }

  render() {
    return (
      <div className="grid-container">
        <header>
          <img src={logo} alt="Globant shops" />
          <Cart cartItems={this.state.cartItems} />
        </header>
        <main>
          <div className="content">
            <div className="filters">
              <Filters
                basics={this.state.basics}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              />
            </div>
            <div className="products-sec">
              <div className="our-products">Our Products:</div>
              <Products
                products={this.state.products}
                addToCart={this.addToCart} />
            </div>

          </div>
        </main>
      </div>
    );
  }
}

export default App;
