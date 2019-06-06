import React from "react";
import PropTypes from "prop-types";

const SeatsList = ({ title, children }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

SeatsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
};

export default SeatsList;
