import logo from "./logo.svg";
import "./App.css";
import Button from '@mui/material/Button';
import AbButton from "./components/AbButton/AbButton";
import bgtop from "./assets/bgtop.png"
import bgbottom from "./assets/bgbottom.png"
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <img style={{position:"fixed", top:"0", right:"0", zIndex:"-999"}} src={bgtop} alt="" />
      <img style={{position:"fixed", left:"0", bottom:"0", zIndex:"-999"}} src={bgbottom} alt="" />
      {/* <AbButton text ="Hello" /> */}
      <Navbar/>
    </div>
  );
}

export default App;
