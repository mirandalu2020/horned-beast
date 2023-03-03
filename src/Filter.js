import React from "react";
import './App.css'; 
import {Form, Button } from 'react-bootstrap';

class Filter extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      hornNumber: 1,
    }
  }

  handleHornChange = (event) => {
    this.setState({
      hornNumber: event.target.value
    });
  }

  handleSubmitButton = (event) => {
    event.preventDefault();
    console.log(this.state.hornNumber)
    this.props.handleSubmit(parseInt(this.state.hornNumber))
  }

  render(){
    return(
      <>
      <Form  onSubmit={this.handleSubmitButton} >
        <Form.Select name="selected" onChange={this.handleHornChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3" >3</option>
          <option value="100">100</option>
          <option value="all">ALL</option>
        </Form.Select>
        <Button type="submit">Submit</Button>
        </Form>
      </>
    )
}
}

export default Filter;