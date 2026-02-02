import React from "react";
import "./App.css";
import "./styles/theme.css";
// Cambia a HashRouter
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";

const Home = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      {/* Usa HashRouter en lugar de BrowserRouter */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;