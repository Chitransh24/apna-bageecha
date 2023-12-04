/* eslint-disable react-hooks/exhaustive-deps */
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
import AbInput from "../../components/AbInput/AbInput";


const Products = () => {
  const [open, setOpen] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 8;
  const pageVisited = pageNumber * productPerPage;

  const token = localStorage.getItem("token");
  const [activeCategory, setActiveCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
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
  }, [products]);
  console.log("Kalashnikavo ",display)
  useEffect(() => {
    if (search) {
      let filtered = display.filter((item) => {
        return item.title === search;
      });
      setFilteredData(filtered);
    }
    if (activeCategory === "Plants") {
      let filtered = display.filter((item) => {
        return item.category[0] === "plants";
      });
      setFilteredData(filtered);
    }
    if (activeCategory === "Fertilizers") {
      let filtered = display.filter((item) => {
        return item.category[0] === "fertilizer";
      });
      setFilteredData(filtered);
    }
    if (activeCategory === "Equipments") {
      let filtered = display.filter((item) => {
        return item.category[0] === "equipment";
      });
      setFilteredData(filtered);
    }
  }, [search, activeCategory]);

  let pageCount = Math.ceil(
    (filteredData.length > 0 ? filteredData.length : products.length) /
      productPerPage
  );
  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };
  console.log(filteredData, "---------------");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
      }}
    >
      <div
        style={{
          display: "flex",
          // backgroundColor: "red",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "space-between",
            padding:"50px 20px",
            
          }}
        >
          <div style={{display:"flex", alignItems:"center", gap:"16px", height:"70%"}}>
            <AbButton sx={{padding:"9px 83px", backgroundColor:"#DBDBDB", borderRadius:"39px", textTransform:"none", height:"100%"}}
              text="Plants"
              variant={activeCategory === "Plants" ? "contained" : "outlined"}
              color="primary"
              onClick={() => setActiveCategory("Plants")}
              large
            />
            <AbButton sx={{padding:"9px 83px", backgroundColor:"#DBDBDB", borderRadius:"39px", textTransform:"none", height:"100%"}}
              text="Equipments"
              variant={
                activeCategory === "Equipments" ? "contained" : "outlined"
              }
              color="primary"
              onClick={() => setActiveCategory("Equipments")}
              large
            />
            <AbButton sx={{padding:"9px 83px", backgroundColor:"#DBDBDB", borderRadius:"39px", textTransform:"none", height:"100%"}}
              text="Fertilizers"
              variant={
                activeCategory === "Fertilizers" ? "contained" : "outlined"
              }
              color="primary"
              onClick={() => setActiveCategory("Fertilizers")}
              large
            />
          </div>
          <div style={{height:"70%"}}>
            <AbInput
              type="text"
              placeholder="Search Here"
              handleChange={(e) => {
                setActiveCategory("");
                setSearch(e.target.value);
              }}
              search
            />
          </div>
        </div>

        <Grid container spacing={0} sx={{ marginBottom: "4rem" }}>
          {(filteredData.length > 0 ? filteredData : display)
            .slice(pageVisited, pageVisited + productPerPage)
            .map((product) => {
              return (
                <>
                  <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
                    <SingleProduct
                      id={product._id}
                      src={product?.imgUrl}
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
