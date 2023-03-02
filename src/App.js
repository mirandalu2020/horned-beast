//The must-have codes

//all class-based components: import --> class --> export
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';
import data from './data.json'
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

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }
  handleOpenModal = (beastImgUrl,beastDescription) => {
    this.setState({
      showModal: true,
      beastImgUrl: beastImgUrl,
      beastDescription:beastDescription,
    })
  }


  render() {

    return (
  //JSX starts here -- create HTML using react
  // the fractional marginal unit to wrap components inside -- wrap JSX inside parents
    <>
      <Header/>

      <Main 
      data = {data} 
      handleOpenModal = {this.handleOpenModal}
      />

      <Footer/>

      <SelectedBeast
      showModal={this.state.showModal} 
      onHide = {this.handleCloseModal}

      beastImgUrl ={this.state.beastImgUrl}
      beastDescription = {this.state.beastDescription} />

    </>
    )
  }
};

//export class
export default App;