import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchProducts, onSeeDetails } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";
import Product from "../components/Products";

class ProductsContainer extends Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products } = this.props;
    return (
      <div className="products-sec">
        <div className="our-products">Our Products:</div>
        <ul className="products">
          {!products ? (
            <div>Loading...</div>
          ) : (
              products.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  onSeeDetailsClicked={() => this.props.onSeeDetails(product)}
                  onAddToCartClicked={() => this.props.addToCart(product)}
                />
              ))
            )}
        </ul>
      </div>
    );
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      basics: PropTypes.bool.isRequired,
      comments: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      rate: PropTypes.string.isRequired,
    })
  ),
  addToCart: PropTypes.func.isRequired,
  onSeeDetails: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
});

export default connect(mapStateToProps, {
  fetchProducts,
  addToCart,
  onSeeDetails
})(ProductsContainer);
