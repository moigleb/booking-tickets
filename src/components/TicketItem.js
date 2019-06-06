import React from 'react'
import PropTypes from 'prop-types'
import Seat from './Seat'

const TicketItem = ({ seat, price, status, onSelectClicked }) => (
  <Seat
    title={seat}
    price={price}
    status={status}
    onSelectClicked={onSelectClicked}
  />
);

TicketItem.propTypes = {
  seat: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired
  }).isRequired,
  onSelectClicked: PropTypes.func.isRequired
};

export default TicketItem;
