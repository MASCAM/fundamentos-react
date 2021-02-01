import React, { useState } from 'react';  //importa o react
import IndiretaFilho from './IndiretaFilho' //importa o componente filho

export default props => {

    //nome idade nerd
    //módulo que passa uma função pra um elemento filho, que chama essa função de volta quando algum evento acontece
    const [nome, setNome]= useState('?');
    const [idade, setIdade] = useState(0);
    const [nerd, setNerd]= useState(false);
    function fornecerInformacoes(nomeParam, idadeParam, nerdParam) { //função para fornecer informações do filho para o pai ao pressionar o botão

        setNome(nomeParam);
        setIdade(idadeParam);
        setNerd(nerdParam);

    }
    return (

        <div>

            <div>
                <span>{nome} </span>
                <span><strong>{idade}</strong></span>
                <span> {nerd ? 'Verdadeiro' : 'False'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho> {/*recebe as informações do filho pela função fornecerInformações*/}

        </div>

    );

}