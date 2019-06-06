import React from "react";
import PropTypes from "prop-types";
import Seat from "./Seat";

const SeatsItem = ({ seat, price, status, onSelectClicked }) => (
  <Seat price={price} status={status} onSelectClicked={onSelectClicked} />
);

SeatsItem.propTypes = {
  seat: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onSelectClicked: PropTypes.func.isRequired
};

export default SeatsItem;
