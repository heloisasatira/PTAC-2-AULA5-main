//toda vez que eu declaro um estado (useState), é preciso importá-lo
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ToDo() {
    const [atividade, setAtividade] = useState("");//definir que inicialmente atividade será uma string

    const [lista, setLista] = useState([]);//definir que atividade será um array

    const [idCount, setIdCount] = useState(1); // Estado para contar os ids

    const salvar = (e) => {
        e.preventDefault();//previnir a ação de enviar o formulário
        setLista([...lista, {
            id: idCount, // Atribuir o id atual
            atividade: atividade
        }]);
        setAtividade(""); // Limpar o campo de atividade
        setIdCount(idCount + 1); // Incrementar o contador de ids
    }

    return (
        <div>
            <Link to="/">home</Link>
            <h3>Lista de Atividades</h3>
               
            <form onSubmit={salvar}>
                <input
                    value={atividade}
                    onChange={(e) => setAtividade(e.target.value)}// e representa um evento que irá disparar uma ação
                />
                <button>ADD</button>
            </form> 

            {lista.map((ativ) => (
                <p key={ativ.id}>{ativ.id}: {ativ.atividade}</p>
            ))}
        </div>
    );
}