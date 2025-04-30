import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import SoloTerreno from './pages/SoloTerreno';
import CasaParcela from './pages/CasaParcela';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/parcelas/solo-terreno" element={<SoloTerreno />} />
            <Route path="/parcelas/casa-parcela" element={<CasaParcela />} />
            <Route path="/preguntas-frecuentes" element={<FAQ />} />
            <Route path="/contacto" element={<ContactForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
