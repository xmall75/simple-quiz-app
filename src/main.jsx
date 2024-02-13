import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from './pages/home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './pages/app'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/main',
    element: <App />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)
