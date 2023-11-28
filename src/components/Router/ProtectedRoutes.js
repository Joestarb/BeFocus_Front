import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  let token = localStorage.getItem("Token");
  let logueado = localStorage.getItem("Logueado");
  let tipoUsuario = Number(localStorage.getItem("TipoUsuario"));

  console.log("Tipo de Usuario:", tipoUsuario);

  if (!logueado || !token) {
    return <Navigate to="/Login" />;
  }

  if (tipoUsuario === 2) {
    return <Navigate to="/Dash" />;
  }
  return <Outlet />;
}

export default ProtectedRoutes;