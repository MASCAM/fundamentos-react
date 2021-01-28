/*

    <If> test={exp?}>
        <span>...</span>
        <span>...</span>
        <span>...</span>
    </If

*/ 

export default props => { //função que retorna um determinado elemento de acordo com a veracidade da expressão fornecida

    const elseChild = props.children.filter(child => { //filtra os elementos filhos passados para o componente if
        //e pega o primeiro elemento cujo nome do tipo é else, basicamente percorre o if e acha o else
        return child.type && child.type.name === 'Else'; //retorna o elemento cujo tipo é else

    })[0];
    const ifChildren= props.children.filter(child => { //filtra os elementos filhos passados para o componente if
        //e pega todos os elementos que não sejam o else, basicamente percorre todos os if's e pega todos que nao sejam else
        return child !== elseChild; //retorna todos os elementos cujo tipo é if

    });
    if (props.test) { //se for um if e passar

        return ifChildren;

    } else if (elseChild) { //se houver um else

        return elseChild;

    } else {    //se não corresponder a nenhum if e não houver nenhum else

        return false;

    }

}

export const Else = props => props.children;