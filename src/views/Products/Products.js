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

  const [products, setProducts] = useState([]);
  let { imgUrl, title, description, price, quantity } = SampleData[0];
  const token = JSON.parse(localStorage.getItem(["userinfo"]?.token));

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  useEffect(() => {
    const apiCall = async () => {
      await axios
        .get("http://localhost:5000/api/product/products", config)
        .then((res) => {
          console.log(res);
          if (res.data) {
            setProducts(res.data);
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
        .get("http://localhost:5000/api/product/getWishList", config)
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
            // setDisplay(productsWithWishList);
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
    <div style={{ width: "100vw", height: "100vh" }}>
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
      <AbModal open={open}>
        <AddProduct setOpen={setOpen} />
      </AbModal>
      <div style={{ textAlign: "right", margin: "5px" }}>
        <AbButton
          sx={{ zIndex: "9999" }}
          variant="contained"
          onClick={() => setOpen(true)}
          text="Add Products"
        />
      </div>
      <div
        style={{
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
                  <Grid item xs={12} sm={6} md={4} lg={3}>
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
    </div>
  );
};

export default Products;
