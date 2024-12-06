import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Background } from './components/Background';

function App() {
  return (
    <div className="bg-black text-white relative">
      <Background />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;