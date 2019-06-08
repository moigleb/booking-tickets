import {
  RECEIVE_SEATS,
  REQUEST_SEATS,
  FAILED_SEATS,
  SELECTED_SEAT,
  UNSELECTED_SEAT,
  CLEAR_SELECTED,
  RESET_EXPIRE_BOOKING,
  SET_EXPIRE_DATE
} from "./constants";

const initialState = {
  seats: [],
  isLoading: false,
  selectedSeats: [],
  errorMessage: false,
  expire: []
};

export default function seatsReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SEATS:
      return {
        ...state,
        isLoading: true,
        errorMessage: false
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
        errorMessage: true
      };
    case SELECTED_SEAT:
      return {
        ...state,
        selectedSeats: [...state.selectedSeats, action.itemSelect]
      };
    case UNSELECTED_SEAT:
      const unSelect = state.selectedSeats.filter(
        item => item.id !== action.id
      );
      return {
        ...state,
        selectedSeats: unSelect
      };
    case CLEAR_SELECTED:
      state.selectedSeats.forEach(item => {
        state.seats.forEach(seatsItem => {
          if (item.id === seatsItem.id) {
            seatsItem.status = "booked";
          }
        });
      });

      return {
        ...state,
        selectedSeats: []
      };

    case SET_EXPIRE_DATE:
      return {
        ...state,
        expire:[...state.expire, action.expire],
      };
    case RESET_EXPIRE_BOOKING:
      const dateNow = new Date();
      let newExpire;
      state.expire.forEach(item => {
        if(dateNow > new Date(item.date)) {
          item.tickets.forEach(ticket => {
            state.seats.forEach(seatsItem => {
              if (ticket.id === seatsItem.id) {
                seatsItem.status = "exist";
                console.log(newExpire);
              }
            });
          });
          newExpire = state.expire.filter(itemDate =>itemDate.date !== item.date);
          console.log(newExpire);
        }
      });
      return {
        ...state,
      };
    default:
      return state;
  }
}

const getTicket = (state, id) => state.find(ticket => ticket.id === id);

export const getTotal = state =>
  state.seatsReducer.selectedSeats
    .reduce(
      (total, el) =>
        total + getTicket(state.seatsReducer.selectedSeats, el.id).price * 1,
      0
    )
    .toFixed(2);
