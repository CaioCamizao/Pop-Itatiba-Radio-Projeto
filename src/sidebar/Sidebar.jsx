import React from 'react';
import './Sidebar.css';
import Imagem from './PopFinal.png';

const SidebarComponent = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-logo'>
                <img src={Imagem} alt='Top Itatiba'/>
            </div>
            <ul className='sidebar-menu'>
                <li><a href='home'>Home</a></li>
                <li><a href='Noticias'>Notícias</a></li>
                <li><a href='Programacao'>Programação</a></li>
                <li><a href='Entretenimento'>Entretenimento</a></li>
                <li><a href='login'>Login</a></li>
                <li><a href='Cadastrar'>Cadastrar</a></li>
            </ul>
        </div>
    );
};

export default SidebarComponent;