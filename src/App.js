import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Index from "./pages/index";
import Notas from "./pages/Notas";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/Login" element={< Login/>} />
          <Route path="/Notas" element={<Notas/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
