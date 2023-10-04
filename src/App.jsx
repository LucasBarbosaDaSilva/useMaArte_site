import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Clothes from "./pages/Clothes";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/roupas" element={<Clothes />} />
      <Route path="/contato" element={<Contact />} />
    </Routes>
  );
}

export default App;
