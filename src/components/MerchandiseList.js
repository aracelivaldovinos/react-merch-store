import React from "react";
import Merchandise from "./Merchandise";
import PropTypes from "prop-types";

function MerchandiseList(props) {
  return (
    <React.Fragment>
      {props.merchandiseList.map((merchandise) =>
      <Merchandise
      whenMerchandiseClicked = {props.onMerchandiseSelection } 
      name = {merchandise.name}
      quantity = {merchandise.quantity}
      description = {merchandise.description}
      id = {merchandise.id}
      key = {merchandise.id} />
      )}
    </React.Fragment>
  );
}

MerchandiseList.propTypes = {
  merchandiseList: PropTypes.array,
  onMerchandiseSelection: PropTypes.func
};

export default MerchandiseList;