import HomePage from "../HomePage";
import Projects from "../Projects";
import NavBarContainer from "../NavBarContainer";
import "./App.css";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <NavBarContainer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
    </div>
  );
}
