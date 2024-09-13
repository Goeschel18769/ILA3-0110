import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <Router>
      <Navbar setCurrentPage={setCurrentPage} />
      <main>
        <Routes>
          <Route path="/" element={<Home id="home" />} />
          <Route path="/about" element={<About id="about" />} />
          <Route path="/projects" element={<Projects id="projects" />} />
          <Route path="/contact" element={<Contact id="contact" />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
