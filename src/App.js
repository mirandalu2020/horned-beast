//The must-have codes

//all class-based components: import --> class --> export
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data.json'
import Modal from 'react-bootstrap/Modal';
import './App.css';

//declare class
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    
      //set state: is modal displaying
      showModal: false,
      beastImgUrl: '',
      beastDescription:'',
    }
  }

  //each updates the state of the modal
  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  SelectedBeast = (imageUrl,description) => {
    this.setState({
      showModal: true,
      beastImg: imageUrl,
      beastDescription: description,

    });
  }

  render() {

    return (
  //JSX starts here -- create HTML using react
  // the fractional marginal unit to wrap components inside -- wrap JSX inside parents
    <>
      <Header/>
      <p onClick={this.SelectedBeast}>Open Modal</p>

      <Main 
      data = {data} 
      SelectedBeast = {this.SelectedBeast}/>

      <Footer/>

      <Modal 
      show={this.state.showModal} 
      onHide = {this.handleCloseModal}>
      <img src={this.state.beastImg} alt=" "/>
      <p>{this.state.beastDescription}</p>          
      
      </Modal>

    </>
    )
  }
};

//export class
export default App;