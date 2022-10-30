import React from "react";
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Proccess from "./pages/Proccess";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/proccess" element={<Proccess />} />
      </Routes>
    </Fragment>
  );
}

export default App;
