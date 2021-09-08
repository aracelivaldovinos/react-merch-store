import React from "react";
import PropTypes from "prop-types";
import {v4} from "uuid";

function NewMerchandiseForm(props) {
  function handleNewMerchFormSubmission(event) {
    event.preventDefault();
    props.onNewMerchandiseCreation({name: event.target.name.value, quantity: event.target.quantity.value, description: event.target.description.value, id: v4()})
  }

  return (
    <React.Fragment>
      <form onSubmit = {handleNewMerchFormSubmission}>
        <input
          type = 'text'
          name = 'name'
          placeholder = 'Merch name' />
        <input
          type = 'number'
          name = 'quantity'
          placeholder = 'Quantity' />
        <textarea
          name = 'description'
          placeholder = 'Describe your merch' />
        <button type = 'submit'>Add!</button>
      </form>
    </React.Fragment>
  );
}

NewMerchandiseForm.propTypes = {
  onNewMerchandiseCreation: PropTypes.func
};

export default NewMerchandiseForm;