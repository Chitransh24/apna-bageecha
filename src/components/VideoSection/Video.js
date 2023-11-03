import React from "react";

function Video({ src }) {
  return (
    <div
      style={{
        height: "100vh",                                                                                                                  
        width: "100vw",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}                          
    >
      {/* <video style={{ height: "650px", Width: "400px", borderRadius: "60px",  }}  src={src}></video> */}
      <video
        loop
        muted
        autoPlay
        style={{ height: "650px", Width: "400px", borderRadius: "60px" }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;
