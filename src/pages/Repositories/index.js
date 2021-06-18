import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import InputSearch from '../../components/InputSearch';
import Cards from '../../components/Cards'
import './style.css';

import infoRepos from '../../Mock/infoRepos.json'

const Repositories = () => {
    const [data, setData] = useState([]);
    const [texto, setTexto] = useState('');

    useEffect(() =>{
        setData(infoRepos)
    },[])

    return (
        <div className="CardArea">
            <Header>
                Repositorios
            </Header>
            <InputSearch texto={texto} setTexto={setTexto}/>
            <div className= "CardArea">
                    <Cards data={data}/>
            </div>
        </div>
    )
}

export default Repositories;