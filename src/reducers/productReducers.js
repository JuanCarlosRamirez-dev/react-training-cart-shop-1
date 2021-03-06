import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_BASICS, ORDER_PRODUCTS_BY_PRICE, SEE_PRODUCT_DETAIL } from "../actions/types";

export const productsReducer = (state = {}, action) => {

    switch (action.type) {

        case FILTER_PRODUCTS_BY_BASICS:
            return {
                ...state,
                basics: action.payload.basics,
                filteredItems: action.payload.items
            };
        case ORDER_PRODUCTS_BY_PRICE:
            return {
                ...state,
                sort: action.payload.sort,
                filteredItems: action.payload.items
            };
        case FETCH_PRODUCTS:
            return { items: action.payload, filteredItems: action.payload };

        case SEE_PRODUCT_DETAIL:
            return {
                ...state,
                product: action.payload
            };
        default:
            return state
    }
}