import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from './pages/home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './pages/app'
import FinishPage from './pages/finish'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/main',
    element: <App />
  },
  {
    path: '/finish',
    element: <FinishPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)
