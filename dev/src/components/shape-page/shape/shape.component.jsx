import { useState } from "react";
import "./shape.styles.scss";
import { motion } from "framer-motion";
const Shape = ({ shape }) => {
  const { animation, type, opacity, width, height, speed } = shape;

  const [x, setX] = useState(shape.x);
  const [y, setY] = useState(shape.y);
  const [speedX, setSpeedX] = useState(speed);
  const [speedY, setSpeedY] = useState(speed);

  const containerElem = document.getElementsByClassName("shape-container")[0];
  const containerTop = containerElem.offsetTop;
  const containerLeft = containerElem.offsetLeft;
  const containerHeight = containerElem.offsetHeight;
  const containerWidth = containerElem.offsetWidth;

  return (
    <motion.div
      className={`shape ${animation} ${type}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        opacity: opacity,
      }}
      animate={{ x: x, y: y }}
      transition={{
        ease: "linear",
        //duration: 0.001
        // repeat: Infinity
      }}
      onAnimationComplete={() => {
        if (x <= containerLeft) {
          setSpeedX(speed);
        }
        if (x + width >= containerWidth - containerLeft) {
          setSpeedX(-speed);
        }
        if (y <= containerTop) {
          setSpeedY(speed);
        }
        if (y + height >= containerHeight - containerTop) {
          setSpeedY(-speed);
        }
        setX(x + speedX);
        setY(y + speedY);
      }}
    ></motion.div>
  );
};

export default Shape;
