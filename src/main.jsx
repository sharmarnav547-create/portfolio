import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('footer-root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
