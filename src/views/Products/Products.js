import React, { useState } from 'react'
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
import { Button } from '@mui/material';
import Video1 from "../../assets/Video.mp4"
import Video from "../../components/VideoSection/Video"
import About from "../../components/About/About"
import SingleProduct from "./SingleProduct"
import SampleData from "./SampleData"
import ReactPaginate from 'react-paginate';
import "./Product.css"

// import Footer from "./components/Footer/Footer";
const Products = () => {
  // let {imgUrl, title, description, price,  quanitity } = SampleData;
  const [products, setProducts] = useState(SampleData)
  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 4;
  const pageVisited = pageNumber * productPerPage;
  
  let pageCount = Math.ceil(products.length / productPerPage);
  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  }
  // console.log(products[0].title)

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "0rem 5rem 0 15rem",
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
      </div>

      <Button
        style={{
          fontSize: "12px",
          margin: "0 0 1rem 44rem",
          height: "41px",
          width: "140px",
          borderRadius: "25px",
          backgroundColor: "#618264",
          border: "none",
          color: "#ffffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
       <Video src={Video1}/>
        <About/>
        <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap"}}>
        {products
        .slice(pageVisited, pageVisited + productPerPage)
        .map((product) => {
          return (
            <>
          
            <SingleProduct src={product.imgUrl} title={product.title} description={product.description} price={product.price} quanitity={product.quanitity} />
       
            </>
            );
        })}
         </div>
      {/* <TestProduct title={title} description={description} price={price} quanitity={quanitity} /> */}
      <ReactPaginate 
       previousLabel={"previous"}
       nextLabel={"next"}
       pageCount={pageCount}
       onPageChange={pageChange}
       containerClassName="paginationBtns"
       previousLinkClassName='previousBtn'
       nextLinkClassName='nextBtn'
       disabledClassName='paginationDisabled'
       activeClassName='paginatonActive'
      />
    </div>
  )
}

export default Products
