import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ComponentBackground from './background-site/Background';
import Footer from './footer/Footer';
import Icones from './icons/IconWhatsapp';
import SideBar from './sidebar/Sidebar';
import RadioPlayer from './radio-player/RadioPlayer';
import Home from './routes/Home';
import Login from './routes/Login';
import News from './routes/News';
import Program from './routes/Program';
import Entertainment from './routes/Entertainment';
import SignIn from './routes/SignIn';
import PageNotFound from './routes/PageNotFound';

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
          <Route path="/Noticias" element={<News />} />
          <Route path="/Programacao" element={<Program />} />
          <Route path="/Entretenimento" element={<Entertainment />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cadastrar" element={<SignIn />} />
          <Route path="*" element={<PageNotFound />} />
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
