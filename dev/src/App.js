import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import ShapesPage from "./routes/shapes/shapes.component";
import Clock from "./routes/clock/clock.component";
import Breathe from "./routes/breathe/breathe.component";

import "./App.scss";

const App = () => {
  return (
    <div className="appMain">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shapes" element={<ShapesPage />} />
          <Route path="clock" element={<Clock />} />
          <Route path="breathe" element={<Breathe />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
