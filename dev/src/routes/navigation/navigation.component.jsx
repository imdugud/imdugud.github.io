import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

const Navigation = () => {
  return (
    <Fragment>
      <Link to="/clock">Clock</Link>
      <Link to="/breathe">Breathe</Link>
      <Link to="/shapes">Shapes</Link>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
