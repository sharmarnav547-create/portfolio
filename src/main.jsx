import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AdminApp from './Admin/Admin.jsx'

if (window.location.pathname.startsWith('/admin')) {
  // Completely override the existing DOM to render full-screen Admin Panel
  document.body.innerHTML = '<div id="admin-root"></div>';
  createRoot(document.getElementById('admin-root')).render(
    <StrictMode>
      <AdminApp />
    </StrictMode>,
  )
} else {
  // Normal website footer rendering
  createRoot(document.getElementById('footer-root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
