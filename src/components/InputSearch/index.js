import React from 'react';

const InputSearch = (props) => {
    return (
        <div>
            <input value={props.texto} onChange={e => props.setTexto(e.target.value)}/>
        </div>
    )
}

export default InputSearch;