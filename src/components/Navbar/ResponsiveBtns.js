import React from "react";
import Cookies from 'js-cookie';
// import { styled } from '@emotion/styled'
// import { styled } from '@mui/system';
import styled from "@emotion/styled";
import { Button, IconButton } from "@mui/material";
import { NotificationsNone, Person, ShoppingCart } from "@mui/icons-material";
import AbButton from "../AbButton/AbButton"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function ResponsiveBtns({toggleCart}) {
 const [items, setItems] = useState()

useEffect(() => {
  const items = JSON.parse(localStorage.getItem('userInfo'));
  // console.log("Agya", items)
  if (items) {
   setItems(items);
  }
}, []);
  console.log("Ayan:", items)
  console.log(toggleCart)



  const [active, setActive] = useState(0);
  const [authActive, setAuthActive] = useState(0);
  const handleActive = (index) => {
    setActive(index);
  };
  const handleAuthActive = (index) => {
    setAuthActive(index);
  };
  console.log(authActive, "auth");

  const ButtonWrapper = styled.section`
    .res-btn {
      padding-inline:30px;
      background-color: #618264;
      color: #fff;
      border-radius: .7rem;
      margin-right: .5rem;
      font-size: 0.8rem;
      font-family: "Nunito";
    }

    .res-btn:hover {
      background-color: #618264;
      color: #fff;
    }
   
      @media (max-width: 600px) {
        .res-btn {
        width: 30px;
        height: 25px;
        font-size: 0.5rem;
        border-radius: 0.6rem;
        margin-right: .5rem;
        position: relative;
        left: 1.3rem;
      }
    }
   
      @media (max-width: 600px) {
        .icon-btn {
        width: 25px;
        height: 25px;
        font-size: 0.5rem;
        border-radius: 0.8rem;
        left: 1.3rem;
      }

      .notification {
      font-size: 1rem;
    }
    }
  
   .login {
    @media (max-width: 600px) {
        width: 20px;
        height: 25px;
        font-size: 0.5rem;
        border-radius: 0.8rem;
        /* position: relative;
        left: 1.5rem; */
      }
   }
   .signup {
    @media (max-width: 600px) {
        width: 20px;
        height: 25px;
        font-size: 0.5rem;
        border-radius: 0.8rem;
        margin-right: 10px;
      }
   }
  `;

  return (
    <ButtonWrapper style={{ display: "flex" }}>
      { items ?
      <>
            
      <Button className="res-btn">Your plan</Button>
   
   <IconButton
     className="icon-btn"
     sx={{
    
       background: "#618264",
       p: -2,
       color: "#fff",
       marginRight: "10px",
       ":hover": { backgroundColor: "black" },
     }}
   >
     <NotificationsNone className="notification" sx={{ p: 0 }} />
   </IconButton>
   
   <IconButton
     className="icon-btn"
     sx={{
    
       background: "#618264",
       p: -2,
       color: "#fff",
       marginRight: "10px",
       ":hover": { backgroundColor: "black" },
     }}
   >
     <Person className="notification" sx={{ p: 0 }} />
   </IconButton>
   
   <IconButton
     className="icon-btn"
     sx={{
    
       background: "#618264",
       p: -2,
       color: "#fff",
       ":hover": { backgroundColor: "black" },
   
     }}
     onClick={toggleCart}
   >
     <ShoppingCart className="notification" sx={{ p: 0 }}  />
   </IconButton>
         
         </>
    : 
    <> <Button className="res-btn">Upgrade</Button> 
    <Link to="/login">
     <AbButton
       className="login"
       sx={{
         color: authActive === 0 ? "#FFFFFF" : "#618264",
         backgroundColor: authActive === 0 ? "#618264" : "#D0E7D2",
         borderRadius: "0.7rem",
         height: "2.5rem",
         textTransform: "none",
         fontSize: "16px",
         padding: "0px 1rem",
         position: "relative",
         left: "30px",
         zIndex: authActive ? "" : 9,
        }}
       variant="contained"
       onClick={() => {
         handleAuthActive(0);
       }}
       text="Login"
       color="light"
     />
   </Link>

   <Link to="/signup">
     <AbButton
     className="signup"
       sx={{
         color: authActive === 1 ? "#FFFFFF" : "#618264",
         backgroundColor: authActive === 1 ? "#618264" : "#D0E7D2",
         borderRadius: "0.7rem",
         height: "2.5rem",
         textTransform: "none",
         fontSize: "16px",
         marginLeft: "1.1rem",
       }}
       variant="contained"
       onClick={() => handleAuthActive(1)}
       text="Signin"
       color="light"
     />
   </Link> </> 
}
    </ButtonWrapper>
  );

}

export default ResponsiveBtns;
