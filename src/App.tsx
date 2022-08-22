import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar.component";
import { GetInfo } from "./sections/GetInfo/GetInfo.screen";
import { Home } from "./sections/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./sections/Login/Login.screen";
import { GlobalContext } from "./services/Context/Context";
import { Quiz } from "./sections/Quiz/Quiz.screen";

function App() {
  return (
    <div className="App">
      <GlobalContext>
        <Router>
          <Navbar />
          <div className="Sections">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/get-info" element={<GetInfo />} />
              <Route path="/quiz1" element={<Quiz />} />
              <Route path="/quiz2" element={<Quiz />} />
              <Route path="/quiz3" element={<Quiz />} />
              <Route path="/quiz4" element={<Quiz />} />
            </Routes>
          </div>
        </Router>
      </GlobalContext>
    </div>
  );
}

export default App;
