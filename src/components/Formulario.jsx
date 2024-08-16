import { useState } from "react";





function Formulario({ campos }) {
    
    const [dados, setdados] = useState({});

    const alteraDados = (e)=>{
        const valor = e.target.value;
        const chave = e.target.id;
        setdados({...dados, [chave]: valor});
    } ;

    //evento = e = submit
    const salvarDados = (e) => {
        e.preventDefault(); //prevenindo o evento Padrão
    }

    return (

        <form id="form_contato" onSubmit={salvarDados}>
            {campos.map((item) => {
                return (
                    <div>
                        <label htmlFor={item.id} >{item.nome}</label>
                        <input 
                        id={item.id} 
                        type={item.tipo}
                        value={dados [item.id]}
                        onChange={alteraDados} />
                    </div>
                );
            })}

            <button type="submit">Enviar Informação</button>
        </form>
    )



}

export default Formulario