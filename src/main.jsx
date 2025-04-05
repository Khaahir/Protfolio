import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Routers from "./routes/Routers"
import { useNavigate } from 'react-router-dom';

const handleNavigate = () =>{
  const navigate = useNavigate()
}

useEffect(()=>{
  handleNavigate
},[useNavigate])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routers />
  </StrictMode>,
)
