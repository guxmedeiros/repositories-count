import React from 'react';
import './style.css';

const Card = (props) => {
    return (
        <div className="Card" >
            <div className="Imagem">
                <img src={props.infoUsuario.avatar_url} alt="avatar" />
            </div>
            <div className="Info">
                <strong>{props.infoUsuario.name}</strong>
                <strong>{props.infoUsuario.public_repos}</strong><p>Repositorios</p>
            </div>
        </div>
    )
}

export default Card;