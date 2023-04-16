import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Info from "./components/Info";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/nosotros" element={<Info />} />
      <Route path="/proyectos" element={<Projects />} />
      <Route path="/galeria" element={<Gallery />} />
      <Route path="/contacto" element={<Contact />} />
    </Routes>
  );
}

export default App;
