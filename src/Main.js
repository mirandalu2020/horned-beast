// to create a class-based component
import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component{

render() {

  let beastArr = this.props.data.map((beast,idx) => {

    return (
          <HornedBeast
    title = {beast._id + '. ' + beast.title}
    imgUrl = {beast.image_url}
    description = {beast.description}
    handleOpenModal = {this.props.handleOpenModal}

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