import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../actions/productActions';
import { addToCart } from "../actions/cartActions";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null
        }
    }

    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        return (
            <div>
                { !this.props.products ? <div>Loading...</div> :
                    <ul className="products">
                        {this.props.products.map(product => (
                            <li key={product.id}>
                                <div className="product">
                                    <p className={product.basics ? 'basics' : 'hide'}> BASICS</p>
                                    <img src={product.img} alt={product.name} />
                                    <div className="product-info">
                                        <p>
                                            {product.name}
                                        </p>
                                        <p>Stars and comments</p>
                                        <div className="product-price">{"$" + product.price}</div>
                                    </div>
                                    <div className="buttons">
                                        <button className="button blue">See details</button>
                                        <button onClick={() => this.props.addToCart(product)} className="button green">Add to cart</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                }
            </div>
        )
    }
}

export default connect((state) => ({ products: state.products.filteredItems }),
    {
        fetchProducts,
        addToCart
    })(Products);
