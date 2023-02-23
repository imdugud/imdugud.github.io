import { Component } from "react";
import Shape from "./../shape/shape.component";
import "./shape-container.styles.css";

class ShapeContainer extends Component{
  render(){
    return (
      <div className="shape-container">
        {
          this.props.shapes.map(shape => {
            return <Shape shape={shape} />;
          })
        }
      </div>
    );
  }
}

export default ShapeContainer;