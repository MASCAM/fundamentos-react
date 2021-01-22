import React from 'react';
import Primeiro from './components/basicos/Primeiro'            //import de componente de teste     
import ComParametro from './components/basicos/ComParametro'    //import de componente com parâmetro
import Fragmento from './components/basicos/Fragmento'          //import de componente com exemplo de fragmento

export default (_) => ( //modo muito compacto de declarar um componente

        <div id="app">
            <h1>Fundamentos React</h1>
            <Fragmento/>
            <ComParametro titulo="Situação do Aluno" aluno="Pedro" nota={5.6}></ComParametro>
            <ComParametro titulo="Situação do Aluno" aluno="Maria" nota={9.9}></ComParametro>
            <Primeiro></Primeiro>
        </div>

);
