import React, { Component } from 'react'

export default class Products extends Component {


    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.products.map(product => (
                        <li key={product._id}>
                            <div className="product">
                                <p className={product.basics ? 'basics' : 'hide'}> BASICS</p>
                                <img src={/* product.image */"./coffe.jpg"} alt={product.name} />
                                <div className="product-info">
                                    <p>
                                        {product.name}
                                    </p>
                                    <p>Stars and comments</p>
                                    <div className="product-price">{"$" + product.price}</div>
                                </div>
                                <div className="buttons">
                                    <button className="button blue">See details</button>
                                    <button className="button green">Add to cart</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
