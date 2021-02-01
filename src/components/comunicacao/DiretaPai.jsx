import React from 'react';  //importa o react
import DiretaFilho from './DiretaFilho' //importa o componente filho

export default props => {

    return (

      <div>

        <DiretaFilho nome="Junior" idade={20}  nerd={true}></DiretaFilho>
        <DiretaFilho nome="Gabriel" idade={17}  nerd={false}></DiretaFilho>

      </div>

    );

}