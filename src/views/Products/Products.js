import React, { useState } from "react";
// import Button from "@mui/material/Button";
// import AbButton from "./components/AbButton/AbButton";
// import bgtop from "./assets/bgtop.png";
// import bgbottom from "../../assets/bgbottom.png";
import LandingImage from "../../components/LandingImage/LandingImage";
import LandingImage1 from "../../assets/LandingImage1.jpeg";
import LandingImage2 from "../../assets/LandingImage2.jpeg";
import LandingImage3 from "../../assets/LandingImage3.jpeg";
// import Navbar from "./components/Navbar/Navbar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Button, IconButton, Grid } from "@mui/material";
import Video1 from "../../assets/Video.mp4";
import Video from "../../components/VideoSection/Video";
import About from "../../components/About/About";
import SingleProduct from "./SingleProduct";
import SampleData from "./SampleData";
import ReactPaginate from "react-paginate";
import "./Product.css";
import axios from "axios";
import { Box } from "@mui/system";

const Products = () => {
  const [products, setProducts] = useState(SampleData);
  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 4;
  const pageVisited = pageNumber * productPerPage;

  const url = "http://localhost:5000/api/product/allProducts";

  async function getProducts() {
    try {
      let res = await axios.get(url);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  getProducts();

  let pageCount = Math.ceil(products.length / productPerPage);
  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };
  // console.log(products[0].title)

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          flexWrap: "wrap",
          marginLeft: "6rem",
        }}
      >
        <LandingImage
          src={LandingImage1}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque"
        />
        <LandingImage
          src={LandingImage2}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque"
        />
        <LandingImage
          src={LandingImage3}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque"
        />
        <LandingImage
          src={LandingImage2}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque"
        />

        <Button
          style={{
            fontSize: "12px",
            // margin: "0 0 1rem 44rem",
            height: "41px",
            width: "140px",
            borderRadius: "25px",
            backgroundColor: "#618264",
            border: "none",
            color: "#ffffff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            top: "35%",
            right: "42%",
          }}
        >
          <p style={{ marginLeft: "20px", textTransform: "none" }}>More</p>
          <div
            style={{
              backgroundColor: "#ffffffe6",
              height: "32px",
              width: "32px",
              borderRadius: "50px",
              color: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "100",
              position: "relative",
              left: "20%",
            }}
          >
            {/* <FontAwesomeIcon
            style={{
              fontSize: "10px",
            }}
            icon={faChevronRight}
          /> */}
          </div>
        </Button>
      </div>

      <Video src={Video1} />
      <About />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
      <Grid container spacing={1}>
      
        {products
          .slice(pageVisited, pageVisited + productPerPage)
          .map((product) => {
            return (
              <>
                <Grid  item xs={12} sm={6} md={4} lg={3}>
                <SingleProduct
                  src={product.imgUrl}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  quanitity={product.quanitity}
                />
                </Grid>
              </>
            );
          })}
          </Grid>
      </Box>

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        pageCount={pageCount}
        onPageChange={pageChange}
        containerClassName="paginationBtns"
        previousLinkClassName="previousBtn"
        nextLinkClassName="nextBtn"
        disabledClassName="paginationDisabled"
        activeClassName="paginatonActive"
      />
    </div>
  );
};

export default Products;
