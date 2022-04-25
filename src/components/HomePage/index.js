import singingPic from "../../MeSinging.jfif";

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
            I'm a software developer who loves to create. Formerly a warehouse
            vehicle driver I made a decision to pursue a passion and become a
            coder. I've learnt a lot through the School of Code, how to
            communicate as a team and how to explore new coding in a fun and
            digestible way
          </p>
        </div>
      </div>
    </div>
  );
}
