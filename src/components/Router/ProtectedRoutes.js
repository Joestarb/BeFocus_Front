import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  let token = localStorage.getItem("Token");
  let logueado = localStorage.getItem("Logueado");
  let tipoUsuario = Number(localStorage.getItem("TipoUsuario"));

  console.log("Tipo de Usuario:", tipoUsuario);

  if (!logueado || !token) {
    if (tipoUsuario === 2) {
      console.log("Redirigiendo a /dash");
      return <Navigate to="/dash" />;
    }
    console.log("Redirigiendo a /Login");
    return <Navigate to="/Login" />;
  }

  // // Si el usuario tiene tipoUsuario 2, solo le permitimos acceder a /dash
  // if (tipoUsuario === 2) {
  //   console.log("Redirigiendo a /dash");
  //   return <Navigate to="/dash" />;
  // }

  // Para otros usuarios, permitir el acceso a otras rutas
  return <Outlet />;
}

export default ProtectedRoutes;
