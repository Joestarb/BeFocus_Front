import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./components/Error404";
import Login from "./pages/Login";
import Notas from "./pages/Notas";
import Tareas from "./pages/Tareas";
import Index from "./pages/index";
import Registro from "./pages/Registro";
import Olvcontra from "./pages/Olvcontra";
import Traductor from "./pages/Traductor";
import Nube from "./pages/Nube";
import ProtectedRoutes from "./components/Router/ProtectedRoutes";
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Login" element={< Login />} />
          <Route path="/Registro" element={< Registro />} />
          <Route path="/Olvcontra" element={< Olvcontra />} />
          <Route path="/*" element={<Error404/>}/>
          <Route element={<ProtectedRoutes/>}>
            <Route path="/Notas" element={<Notas />} />
            <Route path="/Tareas" element={<Tareas />} />
            <Route path="/Traductor" element={<Traductor />} />
            <Route path="/Nube" element={<Nube />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
