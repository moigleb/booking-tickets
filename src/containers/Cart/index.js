import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addToCart } from "../../containers/Cart/actions";
import { clearSelected } from "../../containers/Seats/actions";
import Cart from "../../components/Cart";
import { getTotal } from "../../containers/Seats/reducer";
import { getTotalCart } from "../../containers/Cart/reducer";

const CartContainer = ({
  cart,
  selectedSeats,
  total,
  totalCart,
  addToCart,
  clearSelected
}) => {
  const [checked, setCount] = useState(false);
  const handleAddToCart = selectedSeats => e => {
    addToCart(selectedSeats);
    clearSelected();
    setCount(true);
  };

  return (
    <Cart
      seatsSelected={selectedSeats}
      cart={cart}
      total={total}
      totalCart={totalCart}
      checked={checked}
      onCheckoutClicked={handleAddToCart(selectedSeats)}
    />
  );
};

CartContainer.propTypes = {
  selectedSeats: PropTypes.any.isRequired,
  total: PropTypes.string,
  totalCart: PropTypes.string,
  addToCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  selectedSeats: state.seatsReducer.selectedSeats,
  cart: state.cartReducer.cart,
  total: getTotal(state),
  totalCart: getTotalCart(state)
});

export default connect(
  mapStateToProps,
  { addToCart, getTotalCart, clearSelected }
)(CartContainer);
