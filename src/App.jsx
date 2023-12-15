import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from './pages/Login.jsx'
import LupaPassword from "./pages/Lupa-Password.jsx"
import Register from "./pages/Register.jsx"
import Home from "./pages/Home.jsx"
import Product from "./pages/Product.jsx"
import DetailProduct from "./pages/Detail-Product.jsx"
import CheckoutProduct from "./pages/Checkout-Product.jsx"
import DetailOrder from "./pages/Detail-Order.jsx"
import HistoryOrder from "./pages/History-Order.jsx"
import Profile from "./pages/Profile.jsx"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },{
    path: '/register',
    element: <Register/>
  },{
    path: '/login',
    element: <Login />
  },{
    path: '/lupa-password',
    element: <LupaPassword/>
  },{
    path: '/product',
    element: <Product/>
  },{
    path: '/detail-product',
    element: <DetailProduct/>
  },{
    path: '/checkout-product',
    element: <CheckoutProduct/>
  },{
    path: '/detail-order',
    element: <DetailOrder/>
  },{
    path: '/history-order',
    element: <HistoryOrder/>
  },{
    path: '/profile',
    element: <Profile/>
  }
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
