import { Container } from "@mui/material";
import React, { useState } from "react";
import AbButton from "../AbButton/AbButton";

const Navbar = () => {
  const [active, setActive] = useState(0);
  const [authActive, setAuthActive] = useState(0);
  const handleActive = (index) => {
    setActive(index);
  };
  const handleAuthActive = (index) => {
    setAuthActive(index);
  };
  console.log(active);
  return (
    <div
      style={{
        // width: "100vw",
        height: "5rem",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        // padding:" 0px 5rem"
        marginTop: "1rem",
      }}
    >
      <span
        style={{
          fontFamily: "Nunito",
          fontWeight: "500",
          fontSize: "3rem",
          color: "#2C2C2C",
        }}
      >
        Logo
      </span>
      <div style={{ display: "flex", gap: "5px" }}>
        {active === 0 ? (
          <AbButton
            variant="contained"
            onClick={() => handleActive(0)}
            text="Home"
          />
        ) : (
          <AbButton
            variant="text"
            onClick={() => handleActive(0)}
            text="Home"
          />
        )}

        {active === 1 ? (
          <AbButton
            variant="contained"
            onClick={() => handleActive(1)}
            text="Our Services"
          />
        ) : (
          <AbButton
            variant="text"
            onClick={() => handleActive(1)}
            text="Our Services"
          />
        )}

        {active === 2 ? (
          <AbButton
            variant="contained"
            onClick={() => handleActive(2)}
            text="Plant & Pricing"
          />
        ) : (
          <AbButton
            variant="text"
            onClick={() => handleActive(2)}
            text="Plant & Pricing"
          />
        )}

        {active === 3 ? (
          <AbButton
            variant="contained"
            onClick={() => handleActive(3)}
            text="Blogs"
          />
        ) : (
          <AbButton
            variant="text"
            onClick={() => handleActive(3)}
            text="Blogs"
          />
        )}

        {active === 4 ? (
          <AbButton
            variant="contained"
            onClick={() => handleActive(4)}
            text="Resources"
          />
        ) : (
          <AbButton
            variant="text"
            onClick={() => handleActive(4)}
            text="Resources"
          />
        )}

        {active === 5 ? (
          <AbButton
            variant="contained"
            onClick={() => handleActive(5)}
            text="Product"
          />
        ) : (
          <AbButton
            variant="text"
            onClick={() => handleActive(5)}
            text="Product"
          />
        )}

        {active === 6 ? (
          <AbButton
            variant="contained"
            onClick={() => handleActive(6)}
            text="Contact"
          />
        ) : (
          <AbButton
            variant="text"
            onClick={() => handleActive(6)}
            text="Contact"
          />
        )}
      </div>
      <div>
        {authActive === 0 ? (
          <AbButton
            sx={{
              color: "#FFFFFF",
              borderRadius: "26px",
              height: "3rem",
              textTransform: "none",
              fontSize: "18px",
              padding: "0px 2rem",
              position: "relative",
              left: "30px",
              zIndex: authActive ? "" : 9,
            }}
            variant="contained"
            onClick={() => handleAuthActive(0)}
            text="Login"
          />
        ) : (
          <AbButton
            sx={{
              color: "#618264",
              borderRadius: "26px",
              height: "3rem",
              textTransform: "none",
              fontSize: "18px",
              padding: "0px 2rem",
              position: "relative",
              left: "30px",
            //   zIndex: authActive ? 9909 : "",

            }}
            variant="contained"
            onClick={() => handleAuthActive(0)}
            text="Login"
            color="light"
          />
        )}
        {authActive === 1 ? (
          <AbButton
            sx={{
              color: "#FFFFFF",
              borderRadius: "26px",
              height: "3rem",
              textTransform: "none",
              fontSize: "18px",
              padding: "0px 2rem",
            }}
            variant="contained"
            onClick={() => handleAuthActive(1)}
            text="Signin"
          />
        ) : (
          <AbButton
            sx={{
              color: "#618264",
              borderRadius: "26px",
              height: "3rem",
              textTransform: "none",
              fontSize: "18px",
              padding: "0px 2rem",
            }}
            variant="contained"
            onClick={() => handleAuthActive(1)}
            text="Signin"
            color="light"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
