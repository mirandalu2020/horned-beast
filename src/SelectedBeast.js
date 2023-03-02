import React from "react";
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component{

  //each updates the state of the modal

  render(){
     return(
      <Modal 
      show={this.props.showModal} 
      onHide = {this.props.onHide}>

      <img 
      src={this.props.beastImgUrl} 
      alt={this.props.beastDescription}/> 
      <p>{this.props.beastDescription}</p>
      </Modal>


  )
  }
   
}

export default SelectedBeast;