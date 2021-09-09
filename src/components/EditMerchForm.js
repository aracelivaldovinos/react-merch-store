import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditMerchForm(props) {
  const { merchandise } = props;
  function handleEditMerchFormSubmission(event){
    event.preventDefault();
    props.onEditMerch({name: event.target.name.value, quantity: event.target.quantity.value, description: event.target.description.value});
  }
  return(
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditMerchFormSubmission}
        buttonText="Update Merch" />
    </React.Fragment>
  );
}
EditMerchForm.propTypes ={
  merchandise: PropTypes.object,
  onEditMerch: PropTypes.func
}
export default EditMerchForm;