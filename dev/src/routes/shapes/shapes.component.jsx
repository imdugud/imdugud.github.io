import { useEffect, useState } from "react";
import ShapeContainer from "../../components/shape-page/shape-container/shape-container.component";

const ShapesPage = () => {
  const [shapes, setShapes] = useState([]);
  
  const generateShapes = (length) => {
    const containerElem = document.getElementsByClassName("shape-container")[0];
    const containerHeight = containerElem.offsetHeight;
    const containerWidth = containerElem.offsetWidth;
    
    let arr = [];
    let shapeTypes = ["circle", "rectangular", "square", "triangle"];

    for (let i = 0; i < length; i++) {
      arr.push({
        animation: "DVDAnimation",
        id: i,
        x: Math.floor(Math.random() * containerWidth + 1),
        y: Math.floor(Math.random() * containerHeight + 1),
        width: Math.floor(Math.random() * 351) + 50,
        height: Math.floor(Math.random() * 351) + 50,
        speed: Math.floor(Math.random() * 70) + 10,
        type: `${shapeTypes[Math.floor(Math.random() * 4)]}`,
        opacity: `0.${Math.floor(Math.random() * 9) + 2}`,
      });
    }
    return arr;
  };

  useEffect(() => {
    const tempShapes = generateShapes(10);
    setShapes(tempShapes);
  }, []);

  return <ShapeContainer shapes={shapes} />;
};

export default ShapesPage;
