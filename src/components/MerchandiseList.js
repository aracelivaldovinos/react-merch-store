import React from "react";
import Merchandise from "./Merchandise";
import PropTypes from "prop-types";

function MerchandiseList(props) {
  return (
    <React.Fragment>
      {props.merchandiseList.map((merchandise, index) =>
      <Merchandise name = {merchandise.name}
      quantity = {merchandise.quantity}
      description = {merchandise.description}
      key = {index} />
      )}
    </React.Fragment>
  );
}

MerchandiseList.propTypes = {
  merchandiseList: PropTypes.array
};

export default MerchandiseList;