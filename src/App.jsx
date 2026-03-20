import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import OurProcess from './pages/OurProcess';
import WhyChooseUs from './pages/WhyChooseUs';

function App() {
  return (
    <>
      <div className="min-h-screen font-poppins text-brand-dark-blue flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-process" element={<OurProcess />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
