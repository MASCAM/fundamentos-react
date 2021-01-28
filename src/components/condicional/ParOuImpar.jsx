import React from 'react';  //importa o react

export default props => { //primeiro exemplo de renderização condicional

    const isPar = props.numero % 2 === 0; //compara se é par ou ímpar
    return (

        <div>

            { isPar ? <span>Par</span> : <span>Ímpar</span>}   {/*Verdadeiro ou falso para a afirmação de ser par*/}    

        </div>

    );

}