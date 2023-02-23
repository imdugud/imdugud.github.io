import { Component } from "react";
import { motion } from "framer-motion";
import "./shape.styles.css"

class Shape extends Component {
  constructor(props){
    super(props);
    this.state= {
      x: parseInt(props.shape.x.replace("px", "")),
      y: parseInt(props.shape.y.replace("px", "")),
      width: parseInt(props.shape.width.replace("px", "")),
      height: parseInt(props.shape.height.replace("px", "")),
      timerId: "",
      dirX: 1,
      dirY: 1
    }
  }
  animation = () => {
    const { x, y, width, height, dirX, dirY } = this.state;
    let speed = this.props.shape.speed;
    const screenHeight = document.body.clientHeight;
    const screenWidth = document.body.clientWidth;

    if (y + height >= screenHeight) { 
      this.setState({dirY: -1})
    }
    if(y < 0) {
      this.setState({ dirY: 1 });
    }
    if (x + width >= screenWidth) {
      this.setState({ dirX: -1 });
    }
    if (x < 0) {
      this.setState({ dirX: 1 });
    }
    this.setState(() => {
        return { x : x + speed * dirX };
    });
    this.setState( () => {
      return { y: y + speed * dirY }; 
    });
  };
  componentDidMount(){
    this.setState({ timerId: setInterval(this.animation, 100) });
  }
  componentWillUnmount(){
    clearInterval(this.state.timerId);
  }
  render() {
    const { id, animation, type, width, height, opacity } =
      this.props.shape;

    return (
      <div
        className={`shape ${animation} ${type}`}
        key={id}
        style={{
          top: `${this.state.y}px`,
          left: `${this.state.x}px`,
          width: width,
          height: height,
          opacity: opacity,
        }}
      />
    );
  }
}

export default Shape;
