import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Protfolio from "./Pages/Protfolio";
import Team from "./Pages/Team";
import Dropdown from "./Pages/Dropdown";
import Megamenu from "./Pages/Megamenu";
import Contact from "./Pages/Contact";
import Footer from "./Component/Footer";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/protfolio" element={<Protfolio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/dropdown" element={<Dropdown />} />
          <Route path="/megamenu" element={<Megamenu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
