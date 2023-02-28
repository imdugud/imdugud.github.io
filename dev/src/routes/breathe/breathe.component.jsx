import { motion, useAnimation, useMotionValue, useMotionValueEvent, useTransform, useTime } from "framer-motion";
import { useState, useEffect } from "react";
import "./breathe.styles.scss";

const Breathe = () => {
  const animationControls = useAnimation();
  const title = "Breathe In";
  const action = {
    breatheIn: "4",
    hold1: "4",
    breatheInOut: "4",
    hold2: "4",
  };
  const [x, setX] = useState(0);
  // const time = useTime();
  // const scale = useTransform(time, [-2000, -1000, 1000, 2500], [0.8, 1, 1, 0.8], {clamp: false});


  async function sequence() {
    await animationControls.start({
      scale: 1.5,
      transition: {
        ease: "easeInOut",
        duration: 3,
      },
    });
    await animationControls.start({
      scale: 1.5,
      transition: {
        ease: "easeInOut",
        duration: 0,
      },
    });
    await animationControls.start({
      scale: 0.5,
      transition: {
        ease: "easeInOut",
        duration: 3,
      },
    });
    await animationControls.start({
      scale: 0.5,
      transition: {
        ease: "easeInOut",
        duration: 0,
      },
    });
    if(x < 10){
      await setX(x+5);
    }else{
      console.log("animation is ended");
    }
  }

  useEffect(() => {
     console.log(x)
    sequence();
  }, [x]);

  return (
    <div className="breathe-container">
      <motion.div
        // style={{ scale }}
        className="breathe-circle"
        initial={{ scale: 0.5 }}
        animate={animationControls}
        transition={{ repeat: Infinity }}
      >
        <h1>{title}</h1>
      </motion.div>
      <div className="tag-container"></div>
      <div className="customize-container"></div>
    </div>
  );
};

export default Breathe;
