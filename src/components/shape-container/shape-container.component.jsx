import { Component } from "react";
import Shape from "./../shape/shape.component";

class ShapeContainer extends Component{
  render(){
    return(
      <div className="shape-container">
        <Shape 
          animation=""
          x=""
          y=""
          shape=""
          opacity=""
        />
      </div>
    );
  }
}

export default ShapeContainer;