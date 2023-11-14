import { Navigate, Outlet } from "react-router-dom"

function ProtectedRoutes() {
    let token = localStorage.getItem("Token");
    let logueado = localStorage.getItem("Logueado");

    if(!logueado || !token){
        return <Navigate to="/Login"></Navigate>
    }

  return (
    <Outlet/>
  )
}

export default ProtectedRoutes