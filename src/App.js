import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import AbButton from "./components/AbButton/AbButton";
import bgtop from "./assets/bgtop.png";
import bgbottom from "./assets/bgbottom.png";
import LandingImage1 from "./assets/LandingImage1.jpeg";
import LandingImage2 from "./assets/LandingImage2.jpeg";
import LandingImage3 from "./assets/LandingImage3.jpeg";
import Navbar from "./components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import LandingImage from "./components/LandingImage/LandingImage";
import VideoSection from "./components/VideoSection/Video"
import Video from "./assets/Video.mp4"
import About from "./components/About/About"
import Products from "./views/Products";


function App() {
  return (
    <div>
      <img
        style={{ position: "fixed", top: "0", right: "0", zIndex: "-999" }}
        src={bgtop}
        alt=""
      />
      <img
        style={{ position: "fixed", left: "0", bottom: "0", zIndex: "-999" }}
        src={bgbottom}
        alt=""
      />
      {/* <AbButton text ="Hello" /> */}
      <Navbar />
      {/* <Products src={LandingImage3} ProductName={"Name of the product"} /> */}
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
          <FontAwesomeIcon
            style={{
              fontSize: "10px",
            }}
            icon={faChevronRight}
          />                              
        </div>
      </Button>
            <VideoSection src={Video}/>
            <About/>
    </div>
  );
}

export default App;
