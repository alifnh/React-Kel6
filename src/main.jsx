import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { AppProvider } from './context/AppContext.jsx'
import { CartItem } from './CartItem.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="cartitem" element={<CartItem />} />
        </Routes>
    </BrowserRouter>
    </AppProvider>
  </StrictMode>,
)
