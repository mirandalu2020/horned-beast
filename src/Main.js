// to create a class-based component
import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component{

render() {
  let beastArr = this.props.data.map((beast,idx) => {
    return (
    <HornedBeast
    title = {beast._id + '. ' + beast.title}
    imageUrl = {beast.image_url}
    alt = {beast.description}
    description = {beast.description}
    
    SelectedBeast = {this.props.SelectedBeast}

    key = {idx}
    />)
  })

/*
  let beastArr = [];
  this.props.data.forEach((beast, idx)=> {beastArr.push(
    <HornedBeast
    title = {beast._id + '. ' + beast.title}
    imageUrl = {beast.image_url}
    alt = {beast.description}
    description = {beast.description}
    
    SelectedBeast = {this.props.SelectedBeast}

    key = {idx}
    />
  )
})
*/

    return (
    <>
        <main>
          {beastArr}
        </main>
      </>
    )
  }
} 

export default Main;