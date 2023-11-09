import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./components/Error404";
import Login from "./pages/Login";
import Notas from "./pages/Notas";
import Nube from "./pages/Nube";
import Olvcontra from "./pages/Olvcontra";
import Registro from "./pages/Registro";
import Tareas from "./pages/Tareas";
import Traductor from "./pages/Traductor";
import Index from "./pages/index";
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
          <Route path="/*" element={<Error404/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
