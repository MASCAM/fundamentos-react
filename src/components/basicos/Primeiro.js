import React from 'react';

export default function Primeiro() { //função de teste de componente para ser exportada

    const msg = 'Seja bem vindo(a)!';
    return (<div>
                <h2>Primeiro Componente</h2>
                <p>{ msg }</p>
            </div>);

}