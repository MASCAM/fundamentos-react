import React from 'react';  //importa o react

export default props => {

    //pega a função passada pela propriedade quandoclicar e faz sua chamada no clique do botão
    //isso dispara a função criada no elemento pai que recebe as propriedades passadas pelo filho
    const cb = props.quandoClicar;
    const min = 0;
    const max = 70;
    const gerarIdade = () => parseInt(Math.random() * (max - min) + min); //cria um número aleatório e já o retorna
    const gerarNerd = () => Math.random() > 0.5;
    return (

        <div>

            <div>
                Filho
            </div>
            <button onClick={

                function (e) { 

                    cb('João', gerarIdade(), gerarNerd());

                }

            }>Fornecer Infomações</button>

        </div>

    );

}