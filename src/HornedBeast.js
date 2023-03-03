import React from "react";
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component{
  constructor (props) {
    //super brings down all the props
    super(props);
    this.state = {
      likes: 0
    }
  }

  handleLikes = () => {
    // when the user clicks on "like the beast", update the value of this.state.likes
    this.setState({
      //note that it cannot be used with ++, because setState updates the state and state will update on its own
      likes: this.state.likes + 1,
    })
  }

handleImgClick = () => {
    this.props.handleOpenModal(this.props.imgUrl, this.props.description);
}


  render() {
      //STEP 1: render all title and images
    return(
      <>
      <Card>
        <img
          className="card-img"
          variant="top"
          src={this.props.imgUrl}
          alt={"this is an image of " + this.props.title}

          onClick={this.handleImgClick} />

        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text className="like-button" onClick={this.handleLikes}>{this.state.likes} ❤️Favorite this beast</Card.Text>
        </Card.Body>
      </Card></>
    )
  }
}

export default HornedBeast;