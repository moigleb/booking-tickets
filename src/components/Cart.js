import React from 'react'
import PropTypes from 'prop-types'
import Seat from '../components/Seat'

const Cart  = ({checked, seatsSelected, total, onCheckoutClicked }) => {
  const hasProducts = seatsSelected.length > 0;
  const nodes = hasProducts ? (
    <div className={checked ? `checked` : ""}>
      {seatsSelected.map(seat =>
        <Seat
          price={seat.price}
          key={seat.id}
        />
    )}
    </div>
  ) : (
    <em>Please select tickets for booking.</em>
  );

  return (
    <div>
      <h3>Selected Tickets</h3>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
      <button onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>

    </div>
  )
};

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func,
};

export default Cart
