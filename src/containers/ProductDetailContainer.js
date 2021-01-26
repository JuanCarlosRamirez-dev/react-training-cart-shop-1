import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { addToCart } from '../actions/cartActions';
import Button from '../components/Button';
import Rating from '../components/Rating';
import store from "../store";
class ProductDetailContainer extends Component {
    render() {
        const { productDetail } = this.props;
        return (
            <div className="product-detail">
                <div className="product-detail_container">
                    <div className="product-detail_info">
                        <img className="product-detail_image" src={productDetail.img} alt={productDetail.name} />
                        <div className="product-detail_elements">
                            <p className="product-detail_name">{productDetail.name}</p>
                            <Rating commentsNumber={productDetail.comments} />
                            <div className="product-detail_price">{"$" + productDetail.price}
                                <span className={productDetail.basics ? "basics-detail" : "hide"}> BASICS</span>
                            </div>
                            <p className="product-detail_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
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
                        {console.log(store.getState())}
                    </div>
                </div>
            </div >

        )
    }
}

ProductDetailContainer.propTypes = {
    productDetail: PropTypes.objectOf(
        PropTypes.shape({
            basics: PropTypes.bool.isRequired,
            comments: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
        })
    ),
    addToCart: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    productDetail: state.products.product
})

export default connect(mapStateToProps, {
    addToCart
})(ProductDetailContainer)