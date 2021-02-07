import React, { useState } from 'react';  //importa o react
import './Input.css';   //importa o estilo para o elemento input 

export default props => {

    const [valor, setValor] = useState('Inicial'); //dita o valor inicial do elemento input e a função para alterá-lo
    function quandoMudar(e)  { //quando uma tecla é pressionada no input essa função é chamada

        setValor(e.target.value); //altera o valor do input
        
    }
    return (

      <div className="Input">

          <h2>{valor}</h2>
          <div style={{

            display: 'flex',
            flexDirection: 'column',

          }}>
            <input className="Distance" value={valor} onChange={ //ao pressionar uma tecla 

              quandoMudar //chama a função já declarada

            }/>
            <input className="Distance" value={valor} readOnly/> {/*elemento de leitura somente*/}
            <input className="Distance" value={undefined}/> {/*elemento sem vinculação com estado*/}
          </div>

      </div>

      );

}