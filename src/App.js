import React, { Component } from 'react';
import logo from './assets/globant-shops.svg'
import Products from './components/Products';
import products from './api/mock-products';
import Filters from './components/Filter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: products,
      sort: "",
      basics: ""
    }
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
          <a href="/">React Shopping cart</a>
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
              <Products products={this.state.products} />
            </div>

          </div>
        </main>
      </div>
    );
  }
}

export default App;
