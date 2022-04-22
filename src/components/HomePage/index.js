import singingPic from "../../MeSinging.jfif";

export default function HomePage() {
  return (
    <div className="home-container">
      <div className="singing-pic-container">
        <img classname="singing-pic" style={{ width: "100%" }} src={singingPic} alt="singing" />
        <div class="top-right">
          <p>Lorcan McCullagh</p>
          <p>Software Developer</p>
        </div>
      </div>
      <div className="about-me">
        <h2>About Me</h2>
        <p>paragraph goes here.........</p>
      </div>
    </div>
  );
}
