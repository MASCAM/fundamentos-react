import ReactDOM from 'react-dom';                               //para renderizar o document
import React from 'react';                                      //módulo do React padrão  
import './index.css'                                            //arquivo de estilização
import App from './App'                                         //arquivo principal da aplicação

const el = document.getElementById('root');

//par de chaves para colocar variáveis dentro das tags React
ReactDOM.render( //renderiza tags com a linguagem javascript para o DOM, sintaxe JSX

    <App/>,
    el,
    
);