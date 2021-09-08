import React from "react";
import PropTypes from "prop-types"


function Merchandise(props) {
  return (
    <React.Fragment>
      <h5>{props.name} : {props.quantity}</h5>
      <p><em>{props.description}</em></p>
    </React.Fragment>
  );
}

Merchandise.propTypes ={
  name: PropTypes.string,
  quantity: PropTypes.number,
  description: PropTypes.string
}

export default Merchandise;