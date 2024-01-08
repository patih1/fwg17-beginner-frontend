import { useState } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({children}) => {
  // const [token, setToken] = useState(window.localStorage.getItem('token'))
  const token = useSelector(state => state.auth.token)
  if(token){
    return(
      <>{children}</>
    )
  }else{
    return (
      <Navigate to={'/login'} />
    )
  }
}

export default PrivateRoute