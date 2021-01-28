import React from 'react';  //importa o react
import If, { Else } from './If';      //importa componente de condicional

export default props => { //segundo exemplo de renderização condicional

    const usuario = props.usuario || {};
    return (

        <div>
            {
            /*
            <If test={usuario && usuario.nome}>
                Seja bem vindo <strong>{ usuario.nome }</strong>!
            </If>
            <If test={!usuario || !usuario.nome}>
                Seja bem vindo <strong>Amigão</strong>!
            </If>
            */
            }
            <If test={usuario && usuario.nome}>
                Seja bem vindo <strong>{ usuario.nome }</strong>!
                <Else>
                    Seja bem vindo <strong>Amigão</strong>!
                </Else>
            </If>
            

        </div>

    );

}