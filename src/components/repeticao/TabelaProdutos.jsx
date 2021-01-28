import React from 'react';             //importa o react
import './TabelaProdutos.css'
import produtos from '../../data/produtos' //importa a lista de produtos no banco local

export default props => {

    function getLinhas () { //formatação da tabela

        return produtos.map((produto, index) => { //gera uma tabela de produtos mapeando o banco de dados de produtos importados

            return ( /*Para aplicar outra cor nas linhas pares conforme o css*/
    
                <tr key={produto.id} className={index % 2 === 0 ? 'Par' : 'Impar'}> 
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.preco.toFixed(2)}</td>
                </tr>
    
            );
    
        });

    }
    return ( //retorna a lista formatada

        <div className="TabelaProdutos">

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>

            </table>

        </div>

    )

}