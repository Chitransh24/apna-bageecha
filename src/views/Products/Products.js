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
import { Button, Fade, Modal, IconButton } from "@mui/material";
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
  const productPerPage = 3;
  const pageVisited = pageNumber * productPerPage;
  const [products, setProducts] = useState([]);
  let { imgUrl, title, description, price, quantity } = SampleData[0];
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  useEffect(() => {
    const apiCall = async () => {
      await axios
        .get("http://localhost:5000/api/product/allProducts", config)
        .then((res) => {
          console.log(res)
          if (res.data) {
            setProducts(res.data);
          }
        });
    };
    apiCall();
  }, []);
  console.log(products)
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
        {/* <Video src={Video1} /> */}
        {/* <About /> */}
        <div style={{ textAlign: "right", margin: "5px" }}>
          <AbButton
            variant="contained"
            onClick={() => setOpen(true)}
            text="Add Products"
          />
        </div>
        <AbModal open={open}>
          <AddProduct setOpen={setOpen} />
        </AbModal>
        {products.map((product) => (
          <SingleProduct
            src={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            quantity={product.quantity}
            imgUrl={product.imgUrl}
            key={product._id}
          />
        ))}
        {/* <ReactPaginate 
         previousLabel={"previous"}
         nextLabel={"next"}
         pageCount={pageCount}
         onPageChange={pageChange}
         containerClassName="paginationBtns"
         previousLinkClassName='previousBtn'
         nextLinkClassName='nextBtn'
         disabledClassName='paginationDisabled'
         activeClassName='paginatonActive'
        /> */}
      </div>
      {/* <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap"}}>
        {products
        .slice(pageVisited, pageVisited + productPerPage)
        .map((product) => {
          return (
            <>

            <SingleProduct src={product.imgUrl} title={product.title} description={product.description} price={product.price} quantity={product.quantity} />

            </>
            );
        })}
         </div> */}
      {/* <TestProduct title={title} description={description} price={price} quantity={quantity} /> */}
    </div>
  );
};

export default Products;
