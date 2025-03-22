import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Components/Pages/home/Home.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes >
      <Route element={<App />}>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/cart" element={<div>product page</div>} />
      <Route path="register" element={<div>register</div>} />
      
      </Route>
    </Routes>
  </BrowserRouter>,
)
