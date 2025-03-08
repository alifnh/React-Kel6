import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { AppProvider } from './context/AppContext.jsx'
import { CartItem } from './CartItem.jsx'
import Login from './pages/Login.jsx'
import LoginAdmin from './pages/LoginAdmin.jsx'
import Register from './pages/Register.jsx'
import { Toaster } from 'react-hot-toast'

import Home from './pages/Home.jsx'
import ProductDetail from './pages/productdetail/ProductDetail.jsx'
import TambahProduct from './pages/addproduct/TambahProduct.jsx'
import EditProduct from './pages/editproduct/EditProduct.jsx'
import ListProductAdmin from './pages/ListProductAdmin.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
    <Toaster />
    <BrowserRouter>
        <Routes>
          <Route path="cartitem" element={<CartItem />} />
          <Route path="/login" element={<Login />} />
          <Route path='/login-admin' element={<LoginAdmin />} />
          <Route path='/register' element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail/>} />
          <Route path="/product/create" element={<TambahProduct/>}/>
          <Route path="/product/edit/:id" element={<EditProduct />}/>
          <Route path="/product/list" element={<ListProductAdmin />}/>
        </Routes>
    </BrowserRouter>
    </AppProvider>
  </StrictMode>,
)

// http://10.50.0.13:3006/
