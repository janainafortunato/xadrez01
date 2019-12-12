import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

function Pagina() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo1" alt="logo" />
        <p>
          IFPE-Campus Igarassu <p>Turma de Web I</p>
        </p>
        <a
          className="App-link"
          href="localhost:3000/App"
          target="_blank"
          rel="noopener noreferrer"
        >
          Inicia Jogo de Xadrez
        </a>
      </header>
    </div>
  );
}

export default Pagina;
