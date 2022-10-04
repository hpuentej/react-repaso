import React from 'react'
import logo from "./logo.svg";
import { Properties } from './components/titulo'
import "./App.css";

function App() {
  const chat = "https://web.whatsapp.com/";
  const professions = ['Astronomer', 'Engineer', 'Journalist', 'Judge', 'Mathematician']
  const profesion = professions.map((profession, clave) => <li key={clave}>{profession}</li>)  
  return (
    <div className="App">
      <header className="App-header">        
        <ul>
          {profesion}
        </ul>
        <a
          className="App-link"
          href={chat}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Properties/>
      </header>
    </div>
  );
}

export default App;
