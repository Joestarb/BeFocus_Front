import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Notas from "./pages/Notas";
import Tareas from "./pages/Tareas";
import Index from "./pages/index";
import Traductor from "./pages/Traductor";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/Login" element={< Login/>} />
          <Route path="/Notas" element={<Notas/>} />
          <Route path="/Tareas" element={<Tareas/>} />
          <Route path="/Traductor" element={<Traductor/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
