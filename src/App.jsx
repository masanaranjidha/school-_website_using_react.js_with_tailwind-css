import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Academics from './components/Academics';
import Faculty from './components/Faculty';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Home />
        <About />
        <Academics />
        <Faculty />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
