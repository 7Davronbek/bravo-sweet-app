import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contacts" element={<Contacts />} />
          <Route path="Menu" element={<Menu />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
