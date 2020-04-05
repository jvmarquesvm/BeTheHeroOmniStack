import React from 'react';

//function Header(props) {
//  <h1>{props.title}</h1> 
//  <h1>{props.children}</h1>
function Header({ children }) {
  //props eu uma função javascript
  //Propriedade children vai trazer todo o conteúdo do elemento
    return (
      <header>
        <h1>Be The Heroes</h1>
        <h1>{ children }</h1>
      </header>
    );
}

export default Header;