import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar.component";
import { GetInfo } from "./sections/GetInfo/GetInfo.screen";
import { Home } from "./sections/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./sections/Login/Login.screen";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="Sections">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/get-info" element={<GetInfo />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
