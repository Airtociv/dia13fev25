import { useState } from "react";

const UseList = () => {
  const [list] = useState(["alberto", "Paulo", "Bruno"]);

  const [users] = useState([
    {id: 1, nome: "Antonio", login: "antonio@placeholder.net" },
    {id: 2, nome: "Francisco", login: "francisco@placeholder.net"},
    {id: 3, nome: "Tadeu", login: "tadeu@placeholder.net"}
  ])



  
  return (
    <div>
      {/*
            exemplo de lista ordenada simples chamando cada item da lista diretamente       
      <p>nome:{list[1]}</p>
      <p>nome:{list[0]}</p>
      <p>nome:{list[2]}</p>

      <ul>

            exemplo de lista ordenada simples com  ".map()", que permite acessar a lista de uma vez   
        {list.map((numeroLista, numeroIndice) => (              
          <li key={numeroIndice}>{numeroLista}</li>
        ))}

            segundo a propria documentação do react, exibida ao solocitar ".map()",a função aceita 3 argumentos(valor,indice e array, nessa ordem) que são chamados uma vez para cada elemento do modulo.

      </ul> */}

      <ul>
        {/*
            
            exemplo de lista ordenada com  ".map()", no qual as informações exibidas possuem diferentes identificadores dentro de um mesmo modulo.
            esta é a minha solução, que usa o mesmo codigo do exemplo anterior com o minimo de alterações.
        {users.map((numeroLista, numeroIndice) => (
          <li key={numeroIndice}>Usuario conectado:{numeroLista.login}, bom dia {numeroLista.nome}! </li>
        ))} */}

        {/* esta é a solução do professor, que usa apenas uma das 3 entradas esperadas por ".map()" já que o array possui informações o suficiente para isso. ambas tem o mesmo resultado aparente, mas mas o funcionamento diferente **deve** causar problemas posteriores */}
        {users.map((usuario)=>(<li key={usuario.id}>Usuario conectado:{usuario.login}, bom dia {usuario.nome}!</li>))}
      </ul>

    </div>
  );
};

export default UseList;
