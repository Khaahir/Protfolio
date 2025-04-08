import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Tools from "../pages/Tools";
import Portfolio from "../pages/Portfolio";
import NaviMenu from "../components/NaviMenu";

function Routers() {
  return (
    <Router>
      <NaviMenu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default Routers;
