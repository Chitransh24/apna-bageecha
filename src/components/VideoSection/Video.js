import React from "react";

function Video({ src }) {
  return (
    <div>
      <video loop muted autoPlay style={{ width: "100%" }}>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;
