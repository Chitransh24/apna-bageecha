import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import LandingView from "./views/Landing/LandingView";
import { Route, Routes } from "react-router-dom";
import Login from "./views/Login/Login";
import Signup from "./views/Signup/Signup";
import Home from "./views/Home/Home";
import Products from "./views/Products/Products";
import Pricing from "./views/Pricing/Pricing";
import Contact from "./views/Contact/Contact";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <LandingView>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/product" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </LandingView>
  );
}

export default App;
