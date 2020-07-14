import React from 'react';

import Navbar from './components/layout/Navbar';
import Showcase from './components/pages/Showcase';
import CharacterCard from './components/characters/CharacterCard';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Showcase />
      <CharacterCard />
    </div>
  );
}

export default App;
