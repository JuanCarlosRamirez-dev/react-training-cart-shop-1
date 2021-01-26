import { getProducts } from "../api/client";
import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_BASICS, ORDER_PRODUCTS_BY_PRICE, SEE_PRODUCT_DETAIL } from "./types";

export const fetchProducts = (productId) => async (dispatch) => {

    const res = await getProducts(productId);

    dispatch({
        type: FETCH_PRODUCTS,
        payload: res.products
    });
};

export const filterProductsByBasics = (products, basics) => (dispatch) => {
    dispatch({
        type: FILTER_PRODUCTS_BY_BASICS,
        payload: {
            items: basics !== "BASICS" ? products :
                products.filter(product => product.basics),
            basics: basics
        }
    })
}

export const sortProducts = (filteredProducts, sort) => (dispatch) => {

    const sortedProducts = filteredProducts.slice();
    if (sort === "Relevant") {
        sortedProducts.sort((a, b) => a.id > b.id ? 1 : -1)
    } else {
        sortedProducts.sort((a, b) =>
            sort === "Lower price" ?
                a.price > b.price ? 1 : -1
                : a.price < b.price ? 1 : -1
        )
    }
    dispatch({
        type: ORDER_PRODUCTS_BY_PRICE,
        payload: {
            sort: sort,
            items: sortedProducts
        }
    })
}

export const onSeeDetails = (product) => async (dispatch) => {

    console.log(product)

    dispatch({
        type: SEE_PRODUCT_DETAIL,
        payload: product
    })
}