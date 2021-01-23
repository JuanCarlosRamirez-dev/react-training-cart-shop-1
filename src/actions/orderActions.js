import { postOrder } from "../api/client";
import { CLEAR_CART, CLEAR_ORDER, CREATE_ORDER } from "./types"

export const createOrder = (order) => async (dispatch) => {
    console.log(order)
    try {
        const res = await postOrder(order);
        console.log(res.data)
        dispatch({
            type: CREATE_ORDER,
            payload: res
        });
        localStorage.clear("cartItems");
        dispatch({ type: CLEAR_CART })
    } catch (error) {
        console.log(error)
    }
};

export const clearOrder = () => (dispatch) => {
    dispatch({ type: CLEAR_ORDER });
}