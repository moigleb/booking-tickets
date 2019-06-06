import React from "react";
import Modal from "react-responsive-modal";
import PropTypes from 'prop-types';

export default function ErrorModal({isShowing, toggle, content}) {
  const textModal = content === "selected" ? "You can add no more 4 tickets in one receipt!" : "Sorry, seems to be this seat has booked yet";
  return <Modal open={isShowing} onClose={toggle}>
    <h2>{textModal}</h2>
  </Modal>
}


ErrorModal.propTypes = {
  content: PropTypes.string.isRequired,
  isShowing: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
