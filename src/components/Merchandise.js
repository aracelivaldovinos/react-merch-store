import React from "react";
import PropTypes from "prop-types"


function Merchandise(props) {
  return (
    <React.Fragment>
      <div onClick = { () => props.whenMerchandiseClicked(props.id)}>
        <h5>{props.name} : {props.quantity}</h5>
        <p><em>{props.description}</em></p>
      </div>
    </React.Fragment>
  );
}

Merchandise.propTypes ={
  name: PropTypes.string,
  quantity: PropTypes.number,
  description: PropTypes.string,
  id: PropTypes.string,
  whenMerchandiseClicked: PropTypes.func
}

export default Merchandise;