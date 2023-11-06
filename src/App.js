import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import LandingView from "./views/Landing/LandingView";
import { Route, Routes } from "react-router-dom";
import Login from "./views/Login/Login";
import Signup from "./views/Signup/Signup";
import Home from "./views/Home/Home";
import Products from "./views/Products/Products";
function App() {
  return (
    <LandingView

    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/signup" element={<Products/>} /> */}
        <Route path="/products" element={<Products />} />
      </Routes>
    </LandingView>
  );
}

export default App;
