import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions/cartActions';

class ProductDetail extends Component {
    render() {
        const { product } = this.props;
        return (
            <div className="product-detail">
                <div className="product-detail_container">
                    <div>
                        holaaaaaaaaa
                    </div>
                </div>
            </div>

        )
    }
}


const mapStateToProps = (state) => ({
    product: state.product
})

export default connect(mapStateToProps, {
    addToCart
})(ProductDetail)