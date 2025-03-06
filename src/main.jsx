import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { AppProvider } from './context/AppContext.jsx'
import Login from './pages/login.jsx'
import LoginAdmin from './pages/LoginAdmin.jsx'
import Register from './pages/Register.jsx'
import { Toaster } from 'react-hot-toast'

import Home from './pages/Home.jsx'
import ProductDetail from './pages/productdetail/ProductDetail.jsx'
import TambahProduct from './pages/addproduct/TambahProduct.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
    <Toaster />
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path='/login-admin' element={<LoginAdmin />} />
          <Route path='/register' element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail/>} />
          <Route path="/product/create" element={<TambahProduct/>}/>
        </Routes>
    </BrowserRouter>
    </AppProvider>
  </StrictMode>,
)
