import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import RadioPlayer from '../radio-player/RadioPlayer'
import ComponentBackground from '../background-site/Background'

const Home = () => {
  return (
    <div>
      <Sidebar />
      <ComponentBackground />
      <RadioPlayer />
    </div>
  )
}

export default Home
