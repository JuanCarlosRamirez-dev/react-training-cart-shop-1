import React, { Component } from "react";
import { connect } from "react-redux";
import {
  filterProductsByBasics,
  sortProducts,
} from "../actions/productActions";
import PropTypes from "prop-types";

class Filters extends Component {
  render() {
    return this.props.filteredItems ? (
      <div>Loading...</div>
    ) : (
      <div className="filters">
        <div className="filter">
          <div>
            <h3>Filters:</h3>
            <select
              value={this.props.basics}
              onChange={(e) =>
                this.props.filterProductsByBasics(
                  this.props.products,
                  e.target.value
                )
              }
            >
              <option value="ALL">ALL</option>
              <option value="BASICS">BASICS</option>
            </select>
            <h3>Prices:</h3>
            <input
              id="radio1"
              type="radio"
              name="filter"
              value="Radio1"
            ></input>
            <label htmlFor="radio1">$1 - $50</label> <br />
            <input
              id="radio2"
              type="radio"
              name="filter"
              value="Radio2"
            ></input>
            <label htmlFor="radio2">$51 - $100</label> <br />
            <input
              id="radio3"
              type="radio"
              name="filter"
              value="Radio3"
            ></input>
            <label htmlFor="radio3">$101 - $200</label>
            <h3>Sort by:</h3>
            <select
              value={this.props.sort}
              onChange={(e) =>
                this.props.sortProducts(
                  this.props.filteredProducts,
                  e.target.value
                )
              }
            >
              <option value="Relevant">Relevant</option>
              <option value="Higher price">Higher price</option>
              <option value="Lower price">Lower price</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

Filters.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      basics: PropTypes.bool.isRequired,
    })
  ),
  sort: PropTypes.string,
  items: PropTypes.array,
  filteredProducts: PropTypes.array,
  sortProducts: PropTypes.func.isRequired,
  filterProductsByBasics: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  basics: state.products.basics,
  sort: state.products.sort,
  products: state.products.items,
  filteredProducts: state.products.filteredItems,
});

export default connect(mapStateToProps, {
  filterProductsByBasics,
  sortProducts,
})(Filters);
