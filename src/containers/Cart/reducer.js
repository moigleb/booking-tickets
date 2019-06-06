import { ADD_TO_CART } from "./constants";

const initialState = {
  cart: []
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: action.selectedSeats
      };
    default:
      return state;
  }
}

const getTicket = (state, id) => state.find(ticket => ticket.id === id);

export const getTotalCart = state =>
  state.cartReducer.cart
    .reduce(
      (total, el) => total + getTicket(state.cartReducer.cart, el.id).price * 1,
      0
    )
    .toFixed(2);
