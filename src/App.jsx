import './App.css'
import React from 'react';

import ListaAlunos from './components/repeticao/ListaAlunos'      //import de componente exemplo de lista
import FamiliaMembro from './components/basicos/FamiliaMembro'      //import de componente exemplo de membro de família
import Familia from './components/basicos/Familia'                  //import de componente exemplo de família
import Card from './components/layout/Card';                        //import do componente de exemplo de card
import Aleatorio from './components/basicos/Aleatorio';             //import de componente de teste gerando numeros aleatorios
import Primeiro from './components/basicos/Primeiro';               //import de componente de teste     
import ComParametro from './components/basicos/ComParametro';       //import de componente com parâmetro
import Fragmento from './components/basicos/Fragmento';             //import de componente com exemplo de fragmento

export default (_) => ( //modo muito compacto de declarar um componente

        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card titulo="#06 - Repetição" color="#FF4C65">
                    <ListaAlunos>
                        
                    </ListaAlunos>
                </Card>
                <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                    <Familia sobrenome="Ferreira">
                        <FamiliaMembro nome="Pedro"/>
                        <FamiliaMembro nome="Ana"/>
                        <FamiliaMembro nome="Gustavo"/>
                    </Familia>
                </Card>
                <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                    <Aleatorio min={1} max={60}/>
                </Card>
                <Card titulo="#03 - Fragmento" color="#E94C6F">
                    <Fragmento/>
                </Card>
                <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
                    <ComParametro titulo="Situação do Aluno" aluno="Pedro" nota={5.6}></ComParametro>
                    <ComParametro titulo="Situação do Aluno" aluno="Maria" nota={9.9}></ComParametro>
                </Card>
                <Card titulo="#01 - Primeiro Componente" color="#588C73">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>

);
