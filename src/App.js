import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Error404 from "./components/Error 404/Error404";
import Login from "./pages/Login";
import Notas from "./pages/Notas";
import Tareas from "./pages/Tareas";
import Index from "./pages/index";
import Registro from "./pages/Registro";
import Olvcontra from "./pages/Olvcontra";
import Traductor from "./pages/Traductor";
import Nube from "./pages/Nube";
import ProtectedRoutes from "./components/Router/ProtectedRoutes";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import YouTubePlayer from "./pages/YouTubePlayer";
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
          <Route path="/*" element={<Error404/>}/>
          <Route element={<ProtectedRoutes/>}>
            <Route path="/Home" element={<Home/>}></Route>
            <Route path="/Notas" element={<Notas />} />
            <Route path="/Tareas" element={<Tareas />} />
            <Route path="/Traductor" element={<Traductor />} />
            <Route path="/Nube" element={<Nube />} />
            <Route path="/yt" element={<YouTubePlayer />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
