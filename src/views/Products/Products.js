import React, { useEffect, useState } from "react";
import LandingImage from "../../components/LandingImage/LandingImage";
import LandingImage1 from "../../assets/LandingImage1.jpeg";
import LandingImage2 from "../../assets/LandingImage2.jpeg";
import LandingImage3 from "../../assets/LandingImage3.jpeg";
import { Button, Fade, Modal, IconButton, Grid } from "@mui/material";
import Video1 from "../../assets/Video.mp4";
import Video from "../../components/VideoSection/Video";
import SingleProduct from "./SingleProduct";
import AbButton from "../../components/AbButton/AbButton";
import Backdrop from "@mui/material/Backdrop";
import { Box } from "@mui/system";
import AbModal from "../../components/AbModal/AbModal";
import AddProduct from "./AddProduct";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./Product.css";

const Products = () => {
  const [open, setOpen] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 4;
  const pageVisited = pageNumber * productPerPage;

  const token = localStorage.getItem("token");

  const [products, setProducts] = useState([]);
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  const [display, setDisplay] = useState([]);
  useEffect(() => {
    const config = {
      headers: {
      },
    };
    const apiCall = async () => {
      await axios
        .get("http://localhost:5000/api/product/products", config)
        .then((res) => {
          console.log(res);
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
            setDisplay(productsWithWishList);
          }
        });
    };
    apiCall();
  }, [products, display]);

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
            }}></div>
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
      <AbModal open={open}>
        <AddProduct setOpen={setOpen} />
      </AbModal>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "5rem",
        }}
      >
        <Grid container spacing={1}>
          {products
            .slice(pageVisited, pageVisited + productPerPage)
            .map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <SingleProduct
                  src={product.image}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  quantity={product.quantity}
                  imgUrl={product.imgUrl}
                  key={product._id}
                />
              </Grid>
            ))}
        </Grid>
      </div>
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
      </div>

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

      {/* <Video src={Video1} /> */}
      {/* <About /> */}
      <div style={{ textAlign: "right", margin: "5px" }}>
        <AbButton
          variant="contained"
          onClick={() => setOpen(true)}
          text="Add Products"
        />
      </div>
    </div>
  );
};

export default Products;
