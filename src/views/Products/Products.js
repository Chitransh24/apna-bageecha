import React, { useEffect, useState } from "react";
import { Button, Fade, Modal, IconButton, Grid } from "@mui/material";

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
  const productPerPage = 8;
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
      headers: {},
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
  }, [products, display]);

  let pageCount = Math.ceil(products.length / productPerPage);
  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
    >
  
      <div
        style={{
          display: "flex",
          // backgroundColor: "red",
          margin: "4rem 0 1rem 5rem",
        }}
      >
        <Grid container spacing={1} sx={{ marginBottom: "4rem" }}>
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
    </div>
    // </div>
  );
};

export default Products;
// admin wala part
      // <AbModal open={open}>
      //   <AddProduct setOpen={setOpen} />
      // </AbModal>
      // <div style={{ textAlign: "right", margin: "5px" }}>
      //   <AbButton
      //     sx={{ zIndex: "9999" }}
      //     variant="contained"
      //     onClick={() => setOpen(true)}
      //     text="Add Products"
      //   />
      // </div>