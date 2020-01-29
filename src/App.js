import React from 'react';
import HelloWorld from './state-drills/HelloWorld'
import Bomb from './state-drills/Bomb';
import './App.css';
import RouletteGun from './state-drills/RouletteGun';

function App() {
  return (
    <main className='App'>
      <HelloWorld />
      <Bomb />
      <RouletteGun bulletInChamber={8} />
    </main>
  );
}

export default App;
