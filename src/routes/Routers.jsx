import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Portfolio from '../pages/Portfolio'

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </Router>
  )
}

export default Routers
