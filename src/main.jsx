import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomeLayOut from './layouts/HomeLayout.jsx'
import AddCoffee from './component/AddCoffee.jsx'
import UpdateCoffee from './component/UpdateCoffee.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    Component: HomeLayOut,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path:'addCoffee',
        Component: AddCoffee
      },
      {
        path:'updateCoffee',
        Component: UpdateCoffee
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
