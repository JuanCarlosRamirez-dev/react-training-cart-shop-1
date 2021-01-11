
import { FETCH_PRODUCTS } from "./types";

export const fetchProducts = () => async (dispatch) => {
    const res = await fetch("http://localhost:8080/products")
    const data = await res.json();
    console.log(data)
    dispatch({
        type: FETCH_PRODUCTS,
        payload: data.products
    });
};