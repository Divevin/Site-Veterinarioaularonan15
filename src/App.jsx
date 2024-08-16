import React from "react";
import Cabecalho from "./components/Cabecalho";
import Menu from "./components/Menu";
import Secao from "./components/Secao";
import Cartao from "./components/Cartao";
import Titulo from "./components/Titulo";
import Contato from "./components/Contato";
import Rodape from "./components/Rodape";
import Formulario from "./components/Formulario";
const App = () => {
  const campos = [
    {
      nome: "Nome Completo",
      id: "nome",
      tipo: "text"
    },
    {
      nome: "Telefone de Contato",
      id: "fone",
      tipo: "text"
    },
    {
      nome: "Email Valido",
      id: "email",
      tipo: "email"
    },
    {
      nome: "Digite seu recado",
      id: "recado",
      tipo: "text"
    },
  ]
     
  return (
    <div>
      <Cabecalho />
      <Menu />
      <Secao>
        <img src="src/assets/imagem.png"></img>
      </Secao>
      <Secao>
        <Titulo texto="Serviços" />
        <Cartao
          descricao="Um texto descritivo"
          imagem="#"
          titulo="Um LOGO BEM GRANDE"
        />
        <Cartao descricao="LOREN IPSUN" imagem="#" titulo="Um TITULO" />
      </Secao>

      <Secao>
        <Titulo texto="Contato" />

        <Formulario campos={campos} />
      </Secao>
      <Rodape />
    </div>
  );
};
export default App;
