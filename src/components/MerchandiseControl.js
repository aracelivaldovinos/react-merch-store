import React from "react";
import MerchandiseList from "./MerchandiseList";
import NewMerchandiseForm from "./NewMerchandiseForm"

class MerchandiseControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterMerchandiseList: []
    };
  }

  handleClick = () =>{
    this.setState(prevState =>({
      formVisibleOnPage: !prevState.formVisibleOnPage 
    }));
  }
  
  handleAddingNewMerchToList = (newMerch) =>{
    const newMasterMerchandiseList = this.state.masterMerchandiseList.concat(newMerch);
      this.setState({
        masterMerchandiseList: newMasterMerchandiseList,
        formVisibleOnPage: false
      });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewMerchandiseForm onNewMerchandiseCreation = {this.handleAddingNewMerchToList} />
      buttonText = "Return to Merch List"
    } else {
      currentlyVisibleState = <MerchandiseList merchandiseList = {this.state.masterMerchandiseList} />
      buttonText = "Add Merch"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default MerchandiseControl;