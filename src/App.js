import { useState } from 'react';
import Header from './components/Header';
import PlanetContent from './components/PlanetContent';

function App() {
  const [planetName, setPlanetName]= useState('earth');
  return (
    <div className="App">
      <Header setPlanetName={setPlanetName}/>
      <PlanetContent planetName = {planetName} />
    </div>
  );
}

export default App;
