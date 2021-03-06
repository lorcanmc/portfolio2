import singingPic from "../../MeSinging.jfif";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="home-container">
      <div className="singing-pic-container">
        <img
          classname="singing-pic"
          style={{ width: "100%" }}
          src={singingPic}
          alt="singing"
        />
        <div class="top-right">
          <p>Lorcan McCullagh</p>
          <p>Software Developer</p>
        </div>
      </div>
      <div className="about-me">
        <div className="about-me-wrapper">
          <br></br>
          <h2>About Me</h2>
          <p>
            Hi There! I'm Lorcan. A software developer currently based in
            Birmingham. I've always loved puzzles. Whether it's {" "}
            <a
              className="inline-link"
              target={"_blank"}
              rel="noreferrer"
              href="https://www.codewars.com/users/lorcanMc"
            >
              CodeWars
            </a>{" "}
            or{" "}
            <a
              className="inline-link"
              target={"_blank"}
              rel="noreferrer"
              href="https://www.chess.com/member/lorcanmac"
            >
              chess
            </a>{" "}
            or wordle , I enjoy getting stuck into something new and exciting
          </p>
          <p>
            I'm a software developer who loves to create. Formerly a warehouse
            vehicle driver I made a decision to pursue a passion and become a
            coder. I've learnt a lot through the School of Code, how to
            communicate as a team and how to explore new coding in a fun and
            digestible way
          </p>
          <Link to="/projects">
            <button type="button" className="myButton">
              See My Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
