import React from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar.component";
import { GetInfo } from "./sections/GetInfo/GetInfo";
import { Home } from "./sections/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Sections">
        <Home />
        <GetInfo />
      </div>
    </div>
  );
}

export default App;
