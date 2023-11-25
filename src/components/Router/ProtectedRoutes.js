import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  let token = localStorage.getItem("Token");
  let logueado = localStorage.getItem("Logueado");
  let tipoUsuario = Number(localStorage.getItem("TipoUsuario"));

  console.log("Tipo de Usuario:", tipoUsuario);

  if (!logueado || !token) {
    return <Navigate to="/Login" />;
  }

  if (tipoUsuario === 1) {
    return <Navigate to="/Home" />;
  } else if (tipoUsuario === 2) {
    return <Navigate to="/dash" />;
  }


  return <Outlet />;
}

export default ProtectedRoutes;
