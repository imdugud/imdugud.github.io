import Shape from "../shape/shape.component";
import "./shape-container.styles.scss";

const ShapeContainer = ({ shapes }) => {
  return (
    <div className="shape-container">
      {shapes.map((shape) => {
        return (
          <Shape key={shape.id} shape={shape} />
        );
      })}
    </div>
  );
};

export default ShapeContainer