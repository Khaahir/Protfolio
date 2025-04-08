import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "../pages/Home";
import Tools from "../pages/Tools";
import Portfolio from "../pages/Portfolio";
import NaviMenu from "../components/NaviMenu";
import Button from "../components/cutomBtn";

function Routers() {
  const [isOpen, setIsOpen] = useState(true);
  const HandleToogle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Router>
      <Button variant={"menu"} onClick={HandleToogle}>
        <img className="btn-menu" src="src/assets/menu.png" alt="menu button" />
      </Button>

      <NaviMenu isOpen={isOpen} HandleToogle={HandleToogle} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default Routers;
