import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Error404 from "./components/Error 404/Error404";
import ProtectedRoutes from "./components/Router/ProtectedRoutes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Nosotros from "./pages/Nosotros";
import Notas from "./pages/Notas";
import Nube from "./pages/Nube";
import Olvcontra from "./pages/Olvcontra";
import Registro from "./pages/Registro";
import Tareas from "./pages/Tareas";
import Traductor from "./pages/Traductor";
import Index from "./pages/index";
import DashboradAdmin from "./pages/DashboradAdmin";
import YouTubePlayer from "./pages/YouTubePlayer";
import Contacto from "./pages/Contacto";
import Politicas from "./pages/Politicas";
import ProtectedRoutesAdmin from "./components/Router/ProtectedRoutesAdmin";
function App() {

  const estaLogueado = () => {
    // Verificar si el usuario está logeado
    const token = localStorage.getItem("Token");
    const logueado = localStorage.getItem("Logueado");
    return logueado && token;
  };

  const LoginRoute = () => {
    return estaLogueado() ? <Navigate to="/Home" /> : <Login />;
  };

  const RegistroRoute = () => {
    return estaLogueado() ? <Navigate to="/Home" /> : <Registro />;
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Login" element={<LoginRoute />} />
          <Route path="/Registro" element={<RegistroRoute />} />
          <Route path="/Olvcontra" element={< Olvcontra />} />
          <Route path="/Nosotros" element={< Nosotros />} />
          <Route path="/Contacto" element={< Contacto />} />
          <Route path="/Politicas" element={< Politicas />} />
          <Route path="/*" element={<Error404/>}/>
          <Route element={<ProtectedRoutes/>}>
            <Route path="/Home" element={<Home/>}></Route>
            <Route path="/Notas" element={<Notas />} />
            <Route path="/Tareas" element={<Tareas />} />
            <Route path="/Traductor" element={<Traductor />} />
            <Route path="/Nube" element={<Nube />} />
            <Route path="/dash" element={<DashboradAdmin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
