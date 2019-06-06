import { RECEIVE_SEATS, REQUEST_SEATS, FAILED_SEATS, SELECTED_SEAT, UNSELECTED_SEAT, CLEAR_SELECTED } from "./constants";

const initialState = {
  seats: [],
  isLoading: false,
  selectedSeats: [],
  errorMessage: false,
  rows: [10, 20, 30, 30, 30, 30, 30, 30, 30, 30, 30],
};

export default function seatsReducer (state = initialState, action) {
  switch (action.type) {
    case REQUEST_SEATS:
      return {
        ...state,
        isLoading: true,
        errorMessage: false,
      };
    case RECEIVE_SEATS:
      return {
        ...state,
        seats: action.seats,
        isLoading: false,
        errorMessage: false
      };
    case FAILED_SEATS:
      return {
        ...state,
        isLoading: false,
        errorMessage: true,
      };
    case SELECTED_SEAT:
      return {
        ...state,
        selectedSeats:[
          ...state.selectedSeats,
          action.itemSelect]
      };
      case UNSELECTED_SEAT:
        const unSelect = state.selectedSeats.filter(item=>item.id !== action.id);
        return {
        ...state,
        selectedSeats:unSelect
      };
    case CLEAR_SELECTED:
      state.selectedSeats.forEach(item => {
        state.seats.forEach(seatsItem => {
          if(item.id === seatsItem.id) {
            seatsItem.status = "booked";
          }
        })
      });

      return {
        ...state,
        selectedSeats: []
      };
    default:
      return state
  }
};

const getTicket = (state, id) => state.find(ticket=>ticket.id===id);

export const getTotal = state =>
  state.seatsReducer.selectedSeats
    .reduce((total, el) => total + getTicket(state.seatsReducer.selectedSeats, el.id).price * 1, 0)
    .toFixed(2);