import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Components/Pages/home/Home.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import CartPage from './Components/Pages/carts/CartPage.jsx'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes >
      <Route element={<App />}>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/cart" element={<CartPage></CartPage>} />
      <Route path="register" element={<div>register</div>} />
      
      </Route>
    </Routes>
  </BrowserRouter>
  </Provider>,
)
