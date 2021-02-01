import React, { cloneElement } from 'react';
import FamiliaMembro from './FamiliaMembro'

export default props => { //exemplo de componente família

    return (

        <div>
            {
                props.children.map((child, i) => {  {/*gera um clone dos elementos filhos passado juntamente com suas propriedades*/}

                    return cloneElement(child, {...props, key: i}); 

                })
            }
        </div>

        );

}