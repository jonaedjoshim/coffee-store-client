import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomeLayOut from './layouts/HomeLayout.jsx'
import AddCoffee from './component/AddCoffee.jsx'
import UpdateCoffee from './component/UpdateCoffee.jsx'
import Home from './component/Home.jsx'
import CoffeeDetails from './component/CoffeeDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayOut,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:5000/coffees'),
        Component: Home
      },
      {
        path: 'addCoffee',
        Component: AddCoffee
      },
      {
        path: 'coffee/:id',
        Component: CoffeeDetails
      },
      {
        path: 'updateCoffee/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`),
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
