import Login from "./pages/Login.jsx"
import LupaPassword from "./pages/LupaPassword.jsx"
import Register from "./pages/Register.jsx"
import Home from "./pages/Home.jsx"
import Products from "./pages/Product.jsx"
import DetailProduct from "./pages/DetailProduct.jsx"
import CheckoutProduct from "./pages/CheckoutProduct.jsx"
import DetailOrder from "./pages/DetailOrder.jsx"
import HistoryOrder from "./pages/HistoryOrder.jsx"
import Profile from "./pages/Profile.jsx"
import PrivateRoute from "./component/PrivateRoute.jsx"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./redux/store.js"
import { PersistGate } from "redux-persist/integration/react"
import { persistor } from "./redux/store.js"

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
    path: '/products',
    element: <Products/>
  },{
    path: 'detail-product/:id',
    element: <DetailProduct/>
  },{
    path: '/checkout-product',
    element: (<PrivateRoute> <CheckoutProduct/> </PrivateRoute>)
  },{
    path: '/detail-order/:id',
    element: (<PrivateRoute> <DetailOrder/> </PrivateRoute>)
  },{
    path: '/history-order',
    element: (<PrivateRoute> <HistoryOrder/> </PrivateRoute>)
  },{
    path: '/profile',
    element: (<PrivateRoute> <Profile/> </PrivateRoute>)
  }
])

function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router}/>
      </PersistGate>
    </Provider>
  )
}

export default App
