// to create a class-based component
import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component{
render() {
  //console.log(this.props.data);

  let beastArr = [];
  this.props.data.forEach((beast, idx)=> {beastArr.push(
    <HornedBeast
    title = {beast._id + '. ' + beast.title}
    imageUrl = {beast.image_url}
    alt = {beast.description}
    description = {beast.description}
    
    key = {idx}
    />
  )
})

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