import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Notas from "./pages/Notas";
import Tareas from "./pages/Tareas";
import Index from "./pages/index";
import Registro from "./pages/Registro";
import Olvcontra from "./pages/Olvcontra"; 
import Traductor from "./pages/Traductor";
import Nube from "./pages/Nube";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/Login" element={< Login/>} />
          <Route path="/Notas" element={<Notas/>} />
          <Route path="/Tareas" element={<Tareas/>} />
          <Route path="/Registro" element={< Registro/>} />
          <Route path="/Olvcontra" element={< Olvcontra/>} />
          <Route path="/Traductor" element={<Traductor/>}/>
          <Route path="/Nube" element={<Nube/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
