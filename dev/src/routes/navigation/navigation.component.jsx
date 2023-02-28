import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
    <div className="nav-link-container">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/clock">Clock</Link>
      <Link className="nav-link" to="/breathe">Breathe</Link>
      <Link className="nav-link" to="/shapes">Shapes</Link>
    </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
