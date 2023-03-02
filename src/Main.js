// to create a class-based component
import React from "react";
import HornedBeast from "./HornedBeast";
import Filter from "./Filter"


class Main extends React.Component{


  handleSubmit = (hornNumber) => {
    console.log(hornNumber);
  let filteredData = this.props.data.filter(item => item.horns === hornNumber);
   console.log(filteredData);
  }

  render() {
    let beastArr = this.props.data.map((beast,idx) => {
      return (
          <HornedBeast
            title={beast._id + '. ' + beast.title}
            imgUrl={beast.image_url}
            description={beast.description}
            handleOpenModal={this.props.handleOpenModal}
            key={idx} 
          />
      )
    })
    return (
    <>
        <main>
        <Filter
        handleSubmit={this.handleSubmit}/>

        {beastArr}
        </main>
      </>
    )
    }
  }

export default Main;