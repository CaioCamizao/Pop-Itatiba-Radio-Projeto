import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
import Imagem from './Pop.png'

const SidebarComponent = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={Imagem} alt="Top Itatiba" />
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/">Inicial</Link>
        </li>
        <li>
          <Link to="/noticias">Notícias</Link>
        </li>
        <li>
          <Link to="/programação">Programação</Link>
        </li>
        <li>
          <Link to="/entretenimento">Entretenimento</Link>
        </li>
        <li>
          <Link to="/entrar">Entrar</Link>
        </li>
        <li>
          <Link to="/cadastrar">Cadastrar</Link>
        </li>
      </ul>
    </div>
  )
}

export default SidebarComponent
