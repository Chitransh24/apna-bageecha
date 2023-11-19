import React, { useEffect, useState } from "react";

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
import { Button, Fade, Modal, IconButton, Grid } from "@mui/material";
import Video1 from "../../assets/Video.mp4";
import Video from "../../components/VideoSection/Video";
import About from "../../components/About/About";
import SingleProduct from "./SingleProduct";
import SampleData from "./SampleData";
import AbButton from "../../components/AbButton/AbButton";
import Backdrop from "@mui/material/Backdrop";
import { Box } from "@mui/system";
import AbModal from "../../components/AbModal/AbModal";
import AddProduct from "./AddProduct";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./Product.css";

// import Footer from "./components/Footer/Footer";
const Products = () => {
  const [open, setOpen] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 4;
  const pageVisited = pageNumber * productPerPage;

  const token = localStorage.getItem("token");

  const [products, setProducts] = useState([]);
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const apiCall = async () => {
      await axios
        .get("http://localhost:5000/api/product/allProducts", config)
        .then((res) => {
          if (res.data) {
            setProducts(res.data.products);
          }
        });
    };
    apiCall();
  }, []);
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    };
    const apiCall = async () => {
      await axios
        .get("http://localhost:5000/api/user/getWishList", config)
        .then((res) => {
          if (res.data.wishItems) {
            const productsWithWishList = products.map((product) => {
              const isWishListed = res.data.wishItems.some(
                (item) => item.product._id === product._id
              );
              return {
                ...product,
                isWishListed: isWishListed,
              };
            });
            setDisplay(productsWithWishList);
          }
        });
    };
    apiCall();
  }, [products]);

  let pageCount = Math.ceil(products.length / productPerPage);
  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };

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
      <AbModal open={open}>
        <AddProduct setOpen={setOpen} />
      </AbModal>
      <div style={{ textAlign: "right", margin: "5px" }}>
        <AbButton
          variant="contained"
          onClick={() => setOpen(true)}
          text="Add Products"
        />
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Grid container spacing={1}>
          {display
            .slice(pageVisited, pageVisited + productPerPage)
            .map((product) => {
              return (
                <>
                  <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
                    <SingleProduct
                      id={product._id}
                      src={product.imgUrl}
                      title={product.title}
                      description={product.description}
                      price={product.price}
                      wish={product.isWishListed}
                      quantity={product.quantity}
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
      <Video src={Video1} />
      <About />
    </div>
  );
};

export default Products;
