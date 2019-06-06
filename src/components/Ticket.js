import React from "react";
import PropTypes from "prop-types";

const Ticket = ({ price, status, title, seat }) => (
  <div className="ticket">
    {price} {seat}
  </div>
);

Ticket.propTypes = {
  price: PropTypes.number,
  status: PropTypes.string,
  title: PropTypes.string
};

export default Ticket;
