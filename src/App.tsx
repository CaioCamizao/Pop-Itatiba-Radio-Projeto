import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './footer/Footer'
import Icones from './icons/IconWhatsapp'
import Home from './routes/Home'
import News from './routes/News'
import Program from './routes/Program'
import Entertainment from './routes/Entertainment'
import Login from './routes/Login'
import SignIn from './routes/SignIn'
import PageNotFound from './routes/PageNotFound'
import RadioPlayer from './radio-player/RadioPlayer'

function App() {
  const [playerInitialized, setPlayerInitialized] = useState(false)

  useEffect(() => {
    setPlayerInitialized(true)
  }, [])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noticias" element={<News />} />
          <Route path="/programação" element={<Program />} />
          <Route path="/entretenimento" element={<Entertainment />} />
          <Route path="/entrar" element={<Login />} />
          <Route path="/cadastrar" element={<SignIn />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        {playerInitialized && <RadioPlayer />}

        <footer>
          <Footer />
          <Icones />
        </footer>
      </div>
    </Router>
  )
}

export default App
