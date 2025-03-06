import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { AppProvider } from './context/AppContext.jsx'
import Home from './pages/Home.jsx'
import ProductDetail from './pages/productdetail/ProductDetail.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail/>} />
        </Routes>
    </BrowserRouter>
    </AppProvider>
  </StrictMode>,
)
