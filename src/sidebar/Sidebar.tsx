import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import Imagem from './Pop.png';

const SidebarComponent = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-logo'>
                <img src={Imagem} alt='Top Itatiba'/>
            </div>
            <ul className='sidebar-menu'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/News">Notícias</Link></li>
                <li><Link to="/Program">Programação</Link></li>
                <li><Link to="/Entertainment">Entretenimento</Link></li>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/SignIn">Cadastrar</Link></li>
            </ul>
        </div>
    );
};

export default SidebarComponent;