import React from "react";
import { Button, ButtonGroup, IconButton, Grid, Typography, Box, CardMedia } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faInfo } from "@fortawesome/free-solid-svg-icons";

function App(props) {

  let { imgUrl, title, description, price, quanitity } = props;

  return (

    <Grid container spacing={1}>  
    <Grid  item xs={"200px"} sm={6} md={4} lg={3}>   
    <Box
      sx={{
        margin: "7rem 0 0 0rem",
        width: "325px",
        borderRadius: "35px",
        height: "349px",
        backgroundColor: "#e4e4e4",
      }}
    >
       
   <Grid  item xs={12} sm={6} md={4} lg={3}>
       <CardMedia                                            
      
        sx={{
          height: "170px",
          width: "325px",
          backgroundSize: "cover",
          objectFit: "cover",
          borderTopRightRadius: "35px",
          borderTopLeftRadius: "35px",
        }}
        image={imgUrl}
        alt=""
      />
  </Grid>

      <Box id="productDetail" sx={{ position: "relative" }}>
      <Grid item xs={12} sm={6} md={4}>
        <Typography sx={{ color: "#618264", margin: "0.5rem 0 0 1.5rem", fontFamily: "Nunito", fontWeight: 500, fontSize: "1.3rem" }}>
          {" "}
          {title}
        </Typography>

        <Typography
          sx={{
            fontSize: "12px",
            textAlign: "left",
            height: "70px",
            margin: "0.5rem 0 0 1.5rem",
            width: "220px",
          }}
        >
          {" "}
          {description}
          Lorem ipsum dolor sit amet consectetur adipisicing Ullam consequuntur
        </Typography>
        <Box
          id="buttons"
          sx={{ display: "flex", margin: "0.7rem 0 0 1.5rem" }}
        >

          <Button
           variant="contained"
           fullWidth
            sx={{
              fontSize: "12px",
              marginRight: "5px",
              height: "37px",
              width: "100px",
              borderRadius: "10px",
              backgroundColor: "#618264",
              border: "none",
              color: "#ffffff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textTransform: "none",
              ":hover": { backgroundColor: "#618264" },
            }}
          >
            Buy &#8377;{price}
          </Button>
   
          <ButtonGroup
            variant="contained"
            size="small"
            aria-label="outlined primary button group"
            sx={{
              fontSize: "12px",
              height: "37px",
              borderRadius: "9px",
              backgroundColor: "#618264",
              color: "#ffffff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "none",
              textTransform: "none",
            }}
          >
            <Button sx={{  borderRadius: "10px", width: "30px", }}>
              {" "}
              &#43;{" "}
            </Button>
            <Typography>{quanitity}</Typography>
            <Button sx={{ width: "30px", borderRadius: "10px",  }}>
              {" "}
              &#8722;{" "}
            </Button>
          </ButtonGroup>
          <IconButton
           variant="contained"
            id="heart"
            sx={{
              height: "37px",
              width: "40px",
              marginLeft: "8px",
              borderRadius: "10px",
              backgroundColor: "#618264",
              fontSize: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              ":hover": { backgroundColor: "#618264" },
            }}
          >
            <FontAwesomeIcon icon={faHeart} />
          </IconButton>
          <IconButton
            id="info"
            sx={{
              height: "37px",
              width: "40px",
              marginLeft: "10px",
              position: "relative",
              bottom: "7rem",
              borderRadius: "10px",
              backgroundColor: "#618264",
              fontSize: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              ":hover": { backgroundColor: "#618264" },              
            }}
          >
            <FontAwesomeIcon icon={faInfo} />
          </IconButton>
        </Box>
  
      </Grid>
      </Box>
    
    </Box>
    </Grid>    
    </Grid>
 
  );
}

export default App;

