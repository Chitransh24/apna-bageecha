import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import AbButton from "./components/AbButton/AbButton";

import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LandingView from "./views/Landing/LandingView";
import { Route, Routes } from "react-router-dom";
import Login from "./views/Login/Login";
import Signup from "./views/Signup/Signup";
import Home from "./views/Home/Home";
function App() {
  return (
    <LandingView>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </LandingView>
  );
}

export default App;
