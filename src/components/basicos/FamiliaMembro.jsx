import React from 'react';

export default props => { //exemplo de componente membro de família

    return (

        <div>
            {props.nome} <strong>{props.sobrenome}</strong>
        </div>
        
        );

}