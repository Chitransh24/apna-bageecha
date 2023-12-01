import React from "react";

function Video({ src }) {
  return (
    <div
      style={{

      }}                          
    >
      {/* <video style={{ height: "650px", Width: "400px", borderRadius: "60px",  }}  src={src}></video> */}
      <video
        loop
        muted
        autoPlay
        style={{ width:"100%" }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;
