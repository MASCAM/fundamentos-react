import React from 'react';             //importa o react
import alunos from '../../data/alunos' //importa a lista de alunos no banco local

export default props => {

    const li1 = ( //formatação da lista

    <li>

        {alunos[0].id}) {alunos[0].nome} -`&gt;` {alunos[0].nota}

    </li>

    );
    const listaAlunos = alunos.map((aluno, index) => { //gera uma lista de alunos mapeando o banco de dados de alunos importados

        return (

            <li key={aluno.id}>
                {aluno.id}) {aluno.nome} -&gt; {aluno.nota}
            </li>

        );

    })
    return ( //retorna a lista formatada

        <div>

            <ul style={{ listStyle: 'none '}}>
                {listaAlunos}
            </ul>

        </div>

    )

}