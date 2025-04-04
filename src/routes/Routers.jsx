import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={"Home"}></Route>
        <Route path='/about' element={"about"}></Route>
        <Route path='/portfolio' element={"portfolio"} ></Route>
      </Routes>
    </Router>
  )
}

export default Routers