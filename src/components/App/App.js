import logo from "./logo.svg";
import "./App.css";
import { NavBarContainer } from "../NavBarContainer";
import singingPic from "../../MeSinging.jfif";

function App() {
  return (
    <div className="App">
      <NavBarContainer />
      <div className="singing-pic-container">
        <img style={{ width: "100%" }} src={singingPic} />
        <div class="top-right">
          <p>Lorcan McCullagh</p>
          <p>Software Developer</p>
        </div>
      </div>
    </div>
  );
}

export default App;
