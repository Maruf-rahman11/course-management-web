import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './router/router.jsx'
import AuthProvider from './Contexts/AuthProvider.jsx'


if (!localStorage.getItem("theme")) {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("theme", "light");
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
