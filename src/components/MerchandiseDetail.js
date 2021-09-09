import React from "react";
import PropTypes from "prop-types";

function MerchandiseDetail(props) {
  const { merchandise, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Merchandise Details</h1>
      <h3>{ merchandise.name } : { merchandise.quantity }</h3>
      <p><em>{ merchandise.description }</em></p>
      <button onClick={props.onClickingEdit}>Update Merch</button>
      <button onClick = {() => onClickingDelete(merchandise.id) }>Delete Merch</button>
      <hr />
    </React.Fragment>
  );
}

MerchandiseDetail.propTypes = {
  merchandise: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default MerchandiseDetail;