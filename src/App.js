import React from 'react';

import Navbar from './components/layout/Navbar';
import Showcase from './components/pages/Showcase';
import CharacterCard from './components/characters/CharacterCard';
import About from './components/layout/About';
import Accordion from './components/layout/Accordion';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Showcase />
      <About /> 
      <Accordion />
      {/* <CharacterCard /> */}
    </div>
  );
}

export default App;
