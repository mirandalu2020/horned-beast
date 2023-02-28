// to create a clas-based component
import React from "react";
import HornedBeast from "./HornedBeast";
class Main extends React.Component{

  render() {
    return (
      <>
        <main>
          <HornedBeast
            title = "beset 1"
            imageUrl = "https://cdnb.artstation.com/p/assets/images/images/010/158/755/medium/adela-quiles-beast-the2nd7.jpg?1522877895"
            alt = "this is am image for a horned beast (1)"
            description = "description for beast 1"
          />
          <HornedBeast
            title = "beset 2"
            imageUrl = "https://cdna.artstation.com/p/assets/images/images/010/158/754/large/adela-quiles-beast-the2nd5.jpg?1522877892"
            alt = "this is am image for a horned beast (2)"
            description = "description for beast 2"
          />
        </main>
      </>
    )
  }
} 

export default Main;