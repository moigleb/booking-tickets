import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectedSeats, unSelectedSeats } from "./actions";
import SeatsItem from "../../components/SeatsItem";
import SeatsList from "../../components/SeatsList";
import ErrorModal from "../../components/Modal";
import { resetExpireBooking } from "../../containers/Seats/actions";
import { useState } from "react";

const SeatsContainer = ({
  seats,
  selectedSeats,
  unSelectedSeats,
  selectedSeatsProps,
  resetExpireBooking,
  expire
}) => {
  const { isShowing, toggle } = useModal();
  const [content, setModalContent] = useState("selected");

  let maxLength = selectedSeatsProps && selectedSeatsProps.length === 4;
  if(expire && expire.length > 0) resetExpireBooking();

  const onHandleClick = itemSelect => e => {
    const targetClass = e.currentTarget.classList;

    if (!targetClass.contains("booked")) {
      if (!targetClass.contains("selected") && !maxLength) {
        itemSelect.status = "selected";
        selectedSeats(itemSelect);
      } else if (targetClass.contains("selected")) {
        unSelectedSeats(itemSelect.id);
        itemSelect.status = "exist";
      } else {
        toggle();
        setModalContent("selected");
      }
    } else {
      setModalContent("booked");
      toggle();
    }
  };

  const objectRows = seats.reduce((acc, el) => {
    if (!acc.hasOwnProperty(el.row)) {
      acc[el.row] = 0;
    }
    acc[el.row]++;
    return acc;
  }, {});

  const rows = Object.values(objectRows);

  return (
    <React.Fragment>
      <SeatsList title="Seats">
        {rows.map((numSeats, index) => {
          const itemArraySeats = seats.filter(item => item.row === index + 1);
          return (
            <div key={index}>
              {itemArraySeats.map((seatItem, i) => {
                return (
                  <SeatsItem
                    key={seatItem.id}
                    seat={seatItem.seat}
                    status={seatItem.status}
                    price={seatItem.price}
                    onSelectClicked={onHandleClick(seatItem)}
                  />
                );
              })}
            </div>
          );
        })}
      </SeatsList>
      <ErrorModal isShowing={isShowing} toggle={toggle} content={content} />
    </React.Fragment>
  );
};

SeatsContainer.propTypes = {
  seats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired
    })
  ).isRequired,
  selectedSeats: PropTypes.func.isRequired,
  unSelectedSeats: PropTypes.func.isRequired,
  resetExpireBooking: PropTypes.func.isRequired,
  selectedSeatsProps: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  seats: state.seatsReducer.seats,
  rows: state.seatsReducer.rows,
  selectedSeatsProps: state.seatsReducer.selectedSeats,
  maxLength: state.seatsReducer.maxLength,
  expire: state.seatsReducer.expire,
});

export default connect(
  mapStateToProps,
  { selectedSeats, unSelectedSeats, resetExpireBooking }
)(SeatsContainer);

function useModal() {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle
  };
}
