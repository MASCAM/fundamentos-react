import React, { cloneElement } from 'react';
import FamiliaMembro from './FamiliaMembro'

export default props => { //exemplo de componente família

    return (

        <div>
            {
                props.children.map((child, i) => {  {/*gera um clone dos elementos pais passado juntamente com suas propriedades*/}

                    return cloneElement(child, {...props, key: i}); 

                })
            }
        </div>

        );

}