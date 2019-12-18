import React, {Component} from 'react';
import './App.css';

function Sobre() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Regras do Xadrez</p>
        </p>
        <a
          className="App-link"
          href="localhost:3000/App"
          target="_blank"
          rel="noopener noreferrer"
        >
          Inicia Jogo de Xadrez
        </a>
	<a
          className="App-link"
	  href="localhost:3000/Ajuda"
          target="_blank"
          rel="noopener noreferrer"
        >
	  Ajuda
        </a>
      </header>
    </div>
  );
}

export default Pagina;
export default Ajuda;