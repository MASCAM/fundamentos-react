import './Card.css';            //estilo css para o card
import React from 'react';

export default props => { //exemplo de card

    const cardStyle = {

        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00',

    }
    return (

        <div className="Card" style={cardStyle}>

            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children}
            </div>

        </div>

    );

}