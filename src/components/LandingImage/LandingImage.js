import React from "react";

const App = ({ src, desc }) => {
  return (
    <div>
      <img
        style={{
          borderRadius: "5.5rem",
          height: "350px",
          width: "230px",
          margin: "8.5rem 3rem 0 0",
        }}
        src={src}
        alt="landingimage1"
      />
      <p style={{ width: "230px", margin: "0 0 2rem 0.8rem" }}>{desc}</p>
    </div>
  );
};

export default App;
