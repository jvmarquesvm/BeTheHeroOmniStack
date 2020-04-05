import React from 'react';
//import React, {useState} from 'react';
// import logo from './logo.svg';
// import './App.css';
import './global.css';
//import Header from './Header'
//import Logon from './pages/logon';
import Routes from './routes';


function App() {
  //Conceito de Estado e imutabilidade
  //let contador = 0;
  //const[ contador, setContador ] = useState(0);
  /*
  function increment(){
    //contador += 1;
    setContador(contador + 1);
    console.log(contador);
  }
  */
  return (
    //Posso passar valor via atributo do elemento
    //<Header title="Hello World Oministack" />

    //Posso passar esse valor como valor elemento
    //<Header>Semana OmniStack</Header>

    //Ao inves de ser chamado diretamente, será chamado via Routes
    //<Logon />
    <Routes />

    //<h1>Hello World Oministack</h1>
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello OmniStack</p>
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
      </header>
    </div> 
    */
   //Conceito de Estado e imutabilidade
   /*
   <div>
      <Header>Contador: {contador}</Header>
      <button onClick={increment}>Incrementar</button>
   </div>
   */
  );
}

export default App;