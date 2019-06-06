import React from 'react';
import PropTypes from 'prop-types';

const Seat = ({ price, status, onSelectClicked }) => {

  const statusClass = () => {
    if(status === "selected") {
      return "seat selected";
    } else if(status === "booked") {
      return "seat booked"
    } else {
      return "seat";
    }
  };
  return <div onClick={onSelectClicked} className={statusClass()}>
    {price}
  </div>

};


Seat.propTypes = {
  price: PropTypes.number,
  status: PropTypes.string,
  onSelectClicked: PropTypes.func,
};

export default Seat;
