import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar.component";
import { GetInfo } from "./sections/GetInfo/GetInfo.screen";
import { Home } from "./sections/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./sections/Login/Login.screen";
import { GlobalContext } from "./services/Context/Context";
import { Quiz } from "./sections/Quiz/Quiz.component";
import { Results } from "./sections/Results/Results.component";

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
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/results" element={<Results />} />
            </Routes>
          </div>
        </Router>
      </GlobalContext>
    </div>
  );
}

export default App;
