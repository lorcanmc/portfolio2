import React from "react";
import ReactPlayer from "react-player";

export default function Project(props) {
  const { name, video, description, link } = props;
  return (
    <div className="project-container">
      <ReactPlayer
        controls={true}
        url="videos/animle.mp4"
        playing={true}
        height="500px"
        width="700px"
      />
      <div className="project-text-container">
        <h1>{name}</h1>
      </div>
    </div>
  );
}
