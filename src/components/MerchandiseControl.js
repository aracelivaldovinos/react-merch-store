import React from "react";
import MerchandiseList from "./MerchandiseList";
import NewMerchandiseForm from "./NewMerchandiseForm"
import MerchandiseDetail from "./MerchandiseDetail";
import EditMerchForm from "./EditMerchForm";

class MerchandiseControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterMerchandiseList: [],
      selectedMerchandise: null
    };
  }

  handleClick = () =>{
    if (this.state.selectedMerchandise != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedMerchandise: null,
        editing: false
      });
    } else {
      this.setState(prevState =>({
        formVisibleOnPage: !prevState.formVisibleOnPage 
    }));
  }
}

 handleEditClick = () => {
  //  console.log("handleEditClick reached!")
  this.setState({editing: true});
 } 
  
  handleAddingNewMerchToList = (newMerch) =>{
    const newMasterMerchandiseList = this.state.masterMerchandiseList.concat(newMerch);
      this.setState({
        masterMerchandiseList: newMasterMerchandiseList,
        formVisibleOnPage: false
      });
  }

  handleChangingSelectedMerchandise = (id) => {
    const selectedMerchandise = this.state.masterMerchandiseList.filter(merchandise => merchandise.id === id)[0];
    this.setState({selectedMerchandise: selectedMerchandise});
  }

  handleDeletingMerchandise = (id) => {
    const newMasterMerchandiseList = this.state.masterMerchandiseList.filter(merchandise => merchandise.id !== id );
    this.setState({
      masterMerchandiseList: newMasterMerchandiseList,
      selectedMerchandise: null,
      editing: false
    });
  }

  handleEditingMerchList = (merchToEdit) => {
    const editedMasterMerchList = this.state.masterMerchandiseList.filter(merchandise => merchandise.id !== this.state.selectedMerchandise.id).concat(merchToEdit);
    this.setState({
      masterMerchandiseList: editedMasterMerchList,
      editing: false,
      selectedMerchandise: null
    })
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing){
      currentlyVisibleState = <EditMerchForm merchandise = {this.state.selectedMerchandise} onEditMerch ={this.handleEditingMerchList}/>
      buttonText = "Return to Merch List"
    }
    else if (this.state.selectedMerchandise != null) {
      currentlyVisibleState = <MerchandiseDetail merchandise = {this.state.selectedMerchandise} onClickingDelete = {this.handleDeletingMerchandise} onClickingEdit ={this.handleEditClick}/>
      buttonText = "Return to Merch List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewMerchandiseForm onNewMerchandiseCreation = {this.handleAddingNewMerchToList} />
      buttonText = "Return to Merch List"
    } else {
      currentlyVisibleState = <MerchandiseList merchandiseList = {this.state.masterMerchandiseList} onMerchandiseSelection = {this.handleChangingSelectedMerchandise}/>
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