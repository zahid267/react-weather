import React from 'react';
//import logo from './logo.svg';
import './App.css';
import CityWeather from './components/CityWeather';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <h1>React Weather App</h1>
      </header>
      <main>

        <CityWeather />

      </main>
    </div>
  );
}

export default App;
