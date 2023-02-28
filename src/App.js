//The must-have codes

//all class-based components: import --> class --> export
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data.json'

//declare class
class App extends React.Component {

  render() {

    return (
  //JSX starts here -- create HTML using react
  // the fractional marginal unit to wrap components inside -- wrap JSX inside parents
    <>
      <Header/>
      <Main data = {data}/> 
      <Footer/>
    </>
    )
    
  }
};

//export class
export default App;