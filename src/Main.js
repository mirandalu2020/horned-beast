// to create a class-based component
import React from "react";
import HornedBeast from "./HornedBeast";
import Filter from "./Filter"


class Main extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      sortedData:this.props.data,
    }
  }

  handleSubmit = (hornNumber) => {
    console.log(hornNumber);
    if (!isNaN(hornNumber)) {
    let filteredData = this.props.data.filter(item => item.horns === hornNumber);
    this.setState({
      sortedData: filteredData,
    })
  }

   else {
    console.log(this.state.sortedData)
    this.setState({
      sortedData: " ",
    })

  }
}

  render() {
    let beastArr = [];
    if (this.state.sortedData === " ") {
    beastArr = this.props.data.map((beast,idx) => {
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
  }

  else {
      beastArr = this.state.sortedData.map((beast,idx) => {
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
  }


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