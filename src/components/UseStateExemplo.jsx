import { useState } from "react"; 

const UseStateExemplo = () => {
  let numero = 20;
  console.log(numero);

  const [valor, setValor] = useState(14);

  return (
    <div>
      <h2> Teste de troca de número sem useState</h2>
      <h3>Valor atual: {numero} </h3>
      <button onClick={() => ((numero = 40), console.log(numero))}>
        proximo
      </button>

      <h2> Teste de troca de número com useState</h2>
      <h3>Valor atual: {valor} </h3>
      <button
        onClick={() => {
          setValor(valor + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setValor(valor - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setValor(14);
        }}
      >
        @
      </button>  {/* */}
    </div>//encerrando o conteudo do bloco da pagina
  );//parentese encerrando o retorno da função da constante "UseStateExemplo"
};//colchete encerrando a função da constante "UseStateExemplo"

export default UseStateExemplo; //função do react que permite que todo o codigo da função da constante "UseStateExemplo" seja chamado como um componente ao usar a a tag "<UseStateExemplo/>", em conjunto com a função de importação, no arquivo app.jsx
