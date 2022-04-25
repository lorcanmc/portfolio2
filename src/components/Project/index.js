import React from "react";
import ReactPlayer from "react-player";

export default function Project(props) {
  const { name, video, description, appLink, githubLink } = props;
  return (
    <div className="project-container">
      {video === "videos/animle.mp4" ? (
        <ReactPlayer
          controls={true}
          url={video}
          playing={true}
          height="500px"
          width="700px"
        />
      ) : (
        <div className="project-image">
          <img src={video} />
        </div>
        
      )}

      <div className="project-text-container">
        <h1 style={{ textAlign: "center" }}>{name}</h1>
        {description}
        <div className="button-container">
          <button
            className="myButton"
            onClick={() => {
              window.open(appLink, "_blank");
            }}
          >
            See the Project
          </button>
          <button
            className="myButton"
            onClick={() => {
              window.open(githubLink, "_blank");
            }}
          >
            The Github Repo
          </button>
        </div>
      </div>
    </div>
  );
}
