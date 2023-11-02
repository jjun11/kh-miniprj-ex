import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Layout from "./component/Layout";
import MemberList from "./pages/MemberList";
import Setting from "./pages/Setting";
import UserStore from "./context/UserStore";

function App() {
  return (
    <UserStore>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
        <Route path="/Home" element={<Home />} />
        <Route path="/MemberList" element={<MemberList/>}/>
        <Route path="/Setting" element={<Setting/>}/>
        </Route>
      </Routes>
    </Router>
    </UserStore>
  );
}

export default App;
