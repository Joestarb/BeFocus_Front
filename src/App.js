import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Index from "./pages/index";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Login" element={< Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
