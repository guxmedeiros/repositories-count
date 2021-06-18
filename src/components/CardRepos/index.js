import React from 'react';
import './style.css';

const CardRepos = (props) => {
    return (
        <div className="CardRepos">
            <div>
                <strong>Nome: {props.data.name}</strong>
                <p>Descricao: {props.data.description}</p>
                <p>Linguagem: <strong>{props.data.language}</strong></p>
            </div>
        </div>
    )
}

export default CardRepos;