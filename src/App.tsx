import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ComponentBackground from './background-site/Background';
import Footer from './footer/Footer';
import Icones from './icons/IconWhatsapp';
import Home from './routes/Home';
import Cadastrar from './routes/SignIn';
import Noticias from './routes/News';
import Programacao from './routes/Program';
import Entretenimento from './routes/Entertainment';
import Login from './routes/Login';
import PaginaNaoEncontrada from './routes/PageNotFound';
import SideBar from './sidebar/Sidebar';
import RadioPlayer from './radio-player/RadioPlayer';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <SideBar />
          <ComponentBackground />
          <RadioPlayer />
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Noticias" element={<Noticias />} />
          <Route path="/Programacao" element={<Programacao />} />
          <Route path="/Entretenimento" element={<Entretenimento />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cadastrar" element={<Cadastrar />} />
          <Route path="*" element={<PaginaNaoEncontrada />} />
        </Routes>

        <footer>
          <Footer />
          <Icones />
        </footer>
      </div>
    </Router>
  );
}

export default App;