import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions/cartActions';
import Button from '../components/Button';
class ProductDetailContainer extends Component {
    render() {
        const { productDetail } = this.props;
        return (
            <div className="product-detail">
                <div className="product-detail_container">
                    <div className="product-info">
                        <img src={productDetail.img} alt={productDetail.name} />
                        <div >
                            <h3>{productDetail.name}</h3>
                            <p>Stars and comments</p>
                            <div className="product-price">{"$" + productDetail.price}
                                <span className={productDetail.basics ? "basics" : "hide"}> BASICS</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
                            <a href="/" >See more</a>
                            <Button className={"button green"} label={"Add to cart"} onHandleClick={this.props.addToCart(productDetail)} />
                        </div>

                    </div>
                    <div className="comments-border" />
                    <div>Comments:
                        <div className="comment">
                            <h4>John Doe</h4>
                            <p>Excelent product :)</p>
                        </div>
                        <div className="comment">
                            <h4>John Doe</h4>
                            <p>Excelent product :)</p>
                        </div>
                        <div className="comment">
                            <h4>John Doe</h4>
                            <p>Excelent product :)</p>
                        </div>

                    </div>
                </div>
            </div >

        )
    }
}

const mapStateToProps = (state) => ({
    productDetail: state.products.product
})

export default connect(mapStateToProps, {
    addToCart
})(ProductDetailContainer)