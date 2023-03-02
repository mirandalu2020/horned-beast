import React from "react";
import './App.css'; 
import ListGroup from 'react-bootstrap/ListGroup';

class Form extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){

    //setState must take
    let myList = [0,2,3,4,5]
    return(
      <>
      <ListGroup>
        {myList}
      </ListGroup>
      </>
    )
  }
}

export default Form;