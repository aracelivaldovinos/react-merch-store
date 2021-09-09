import React from "react";
import PropTypes from "prop-types";
import {v4} from "uuid";
import ReusableForm from "./ReusableForm";

function NewMerchandiseForm(props) {
  function handleNewMerchFormSubmission(event) {
    event.preventDefault();
    props.onNewMerchandiseCreation({name: event.target.name.value, quantity: event.target.quantity.value, description: event.target.description.value, id: v4()})
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewMerchFormSubmission}
      buttonText="Add!" />
    </React.Fragment>
  );
}

NewMerchandiseForm.propTypes = {
  onNewMerchandiseCreation: PropTypes.func
};

export default NewMerchandiseForm;