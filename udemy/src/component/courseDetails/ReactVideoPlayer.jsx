import React from "react";
import ReactPlayer from "react-player";
const ReactVideoPlayer = ({ videoLink }) => {
  return (
    <div className="player-wraper pt-5">
      <ReactPlayer
        url={videoLink}
        className="react-pl"
        width="100%"
        height="40vh"
      />
    </div>
  );
};

export default ReactVideoPlayer;
