import {
  RECEIVE_SEATS,
  REQUEST_SEATS,
  FAILED_SEATS,
  SELECTED_SEAT,
  UNSELECTED_SEAT,
  CLEAR_SELECTED,
  SET_EXPIRE_DATE,
  RESET_EXPIRE_BOOKING
} from "./constants";

export const requestSeats = () => ({ type: REQUEST_SEATS });
export const receiveSeats = seats => ({ type: RECEIVE_SEATS, seats });
export const failedSeats = () => ({ type: FAILED_SEATS });
export const selectedSeats = itemSelect => ({
  type: SELECTED_SEAT,
  itemSelect
});
export const unSelectedSeats = id => ({ type: UNSELECTED_SEAT, id });
export const clearSelected = id => ({ type: CLEAR_SELECTED });
export const setExpireDate = (expire) => ({ type: SET_EXPIRE_DATE , expire});
export const resetExpireBooking = () => ({ type: RESET_EXPIRE_BOOKING });
