import { Navigate, Outlet } from "react-router-dom"

function ProtectedRoutes() {
    let token = localStorage.getItem("Token");
    let logeado = localStorage.getItem("Logeado");

    if(!logeado || !token){
        return <Navigate to="/Login"></Navigate>
    }

  return (
    <Outlet/>
  )
}

export default ProtectedRoutes