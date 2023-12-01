import React from 'react'

function Heading() {
  return (

        <div
        style={{
          backgroundColor: "#618264",
          color: "#dbdbdb",
          textAlign: "center",
          fontSize: "2rem",
        }}
      >
        <div style={{padding:"30px", display:"flex", flexDirection:"column", color:"white"}}>
           <span style={{ margin:"0",fontSize:"100px",fontWeight:"1000"}}>APNA</span>
           <span style={{ margin:"0",fontSize:"100px",position: "relative",top: "-41px",fontWeight:"1000"}}>BAGEECHA</span>
           <span style={{position: "relative",top: "-41px", fontSize:"1.5rem", fontWeight:"400"}}>"where homegrown goodness thrives!"</span>
        </div>
      </div>
    
  )
}

export default Heading;
