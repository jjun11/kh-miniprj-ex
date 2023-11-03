import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
// import Profile from "./pages/profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        
        {/* <Route path="/Profile" element={<Profile />} /> */}
        <Route path="/Home" element={<Home />} />


      </Routes>
    </Router>
  );
}
export default App;
