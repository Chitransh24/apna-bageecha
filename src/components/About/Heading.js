import React from 'react'

function Heading() {
  return (

        <div
        style={{
          height: "300px",
          width: "1530px",
          backgroundColor: "#618264",
          color: "#dbdbdb",
          textAlign: "center",
          fontSize: "2rem",
          position: "relative",
          bottom: "2.6rem",
        }}
      >
        <h1 style={{ position: "relative", top: "2rem" }}>
          Welcome to <b style={{ color: "#fff" }}>Apna Bageecha</b>, Your <br />{" "}
          Ideal Kitchen Garden Compainion!
        </h1>
        <hr
          style={{ width: "900px", height: "2px", backgroundColor: "#fff" }}
        />
        <p style={{ position: "relative", bottom: "1rem" }}>
         Where Home Grown Godness Thrives 🌱🌿
        </p>
      </div>
    
  )
}

export default Heading;
