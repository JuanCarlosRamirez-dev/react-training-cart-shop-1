import React, { Component } from 'react';
import logo from './assets/globant-shops.svg'
import Products from './components/Products';
import products from './api/mock-products';
import Filters from './components/Filter';
import Cart from './components/Cart';
import Payment from './components/Payment';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: products,
      cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
      sort: "",
      basics: "",
      displayForm: false
    }
  }

  toggleCheckoutForm = () => {
    if (!this.state.displayForm) {
      this.setState({ displayForm: true })
    } else {
      this.setState({ displayForm: false })
    }
  }

  createOrder = (order) => {
    alert('created' + order.name)
  }

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({ cartItems: cartItems.filter(x => x.id !== product.id) })
    localStorage.setItem("cartItems", JSON.stringify(cartItems.filter(x => x.id !== product.id)));
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
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
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
      <Provider store={store}>
        <div className="grid-container">
          <header>
            <img src={logo} alt="Globant shops" />
            <Cart
              cartItems={this.state.cartItems}
              removeFromCart={this.removeFromCart}
              toggleCheckoutForm={this.toggleCheckoutForm} />
          </header>
          <main>

            <div className={!this.state.displayForm ? 'display' : 'hide'}>
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
            </div>
            <div className={this.state.displayForm ? 'display' : 'hide'}>
              <Payment
                createOrder={this.createOrder}
                cartItems={this.state.cartItems}
                removeFromCart={this.removeFromCart} />
            </div>
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
