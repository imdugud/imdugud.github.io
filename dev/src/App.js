import { Routes, Route } from "react-router-dom";
import { Component } from "react";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      shapes: [],
    };
  }

  setShapes = () => {
    let arr = [];
    let shapeTypes = ["circle", "rectangular", "square", "triangle"];
    const length = 10;
    for (let i = 0; i < length; i++) {
      arr.push({
        animation: "DVDAnimation",
        id: `${Math.floor(Math.random())}`,
        x: `${Math.floor(Math.random() * document.body.clientWidth + 1)}px`,
        y: `${Math.floor(Math.random() * document.body.clientHeight + 1)}px`,
        type: `${shapeTypes[Math.floor(Math.random() * 4)]}`,
        width: `${Math.floor(Math.random() * 351) + 50}px`,
        height: `${Math.floor(Math.random() * 351) + 50}px`,
        opacity: `0.${Math.floor(Math.random() * 9) + 2}`,
        speed: `${Math.floor(Math.random() * 5) + 1}`,
      });
    }
    return arr;
  };

  componentDidMount() {
    this.setState(
      () => {
        return { shapes: this.setShapes() };
      },
      () => {
        console.log(this.state.shapes);
      }
    );
  }

  render() {
    return (
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          {/* <Route path="shapes" element={<Shapes />} />
          <Route path="shapes" element={<Clock />} />
          <Route path="shapes" element={<Breathe />} /> */}
        </Route>
      </Routes>
    );
  }
}

export default App;
