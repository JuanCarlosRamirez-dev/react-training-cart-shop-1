import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";
import store from "../store";

export const addToCart = (product) => (dispatch) => {
  console.log(store.getState().cart.cartItems);
  const cartItems = store.getState().cart.cartItems.slice();
  let alreadyExist = false;
  cartItems.forEach((x) => {
    if (x.id === product.id) {
      alreadyExist = true;
      x.count += 1;
    }
  });
  if (!alreadyExist) {
    cartItems.push({ ...product, count: 1 });
  }
  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (product) => (dispatch) => {
  console.log(store.getState().cart.cartItems);
  const cartItems = store
    .getState()
    .cart.cartItems.slice()
    .filter((x) => x.id !== product.id);
  dispatch({
    type: REMOVE_FROM_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
