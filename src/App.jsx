import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Clothes from "./pages/Clothes";
import Contact from "./pages/Contact";

function App() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // console.log(prevScrollPos);
    };
  }, [prevScrollPos]);
  return (
    <Routes>
      <Route path="/" element={<Home />} prevScrollPos={prevScrollPos} />
      <Route
        path="/roupas"
        element={<Clothes />}
        prevScrollPos={prevScrollPos}
      />
      <Route
        path="/contato"
        element={<Contact />}
        prevScrollPos={prevScrollPos}
      />
    </Routes>
  );
}

export default App;
