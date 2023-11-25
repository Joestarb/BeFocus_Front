import { Navigate, Outlet } from "react-router-dom"

function ProtectedRoutesAdmin() {
    let token = localStorage.getItem("Token");
    let logueado = localStorage.getItem("Logueado");
    let TipoUsuario = Number(localStorage.getItem("TipoUsuario"));

    if(!logueado || !token || TipoUsuario !== 2){
        return <Navigate to="/Login"></Navigate>
    }

  return (
    <Outlet/>
  )
}

export default ProtectedRoutesAdmin