import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import RadioPlayer from '../radio-player/RadioPlayer'

const News = () => {
  return (
    <div>
      <Sidebar />

      <div style={{ height: '600px', overflow: 'auto' }}>
        <iframe
          title="G1 Música"
          src="https://g1.globo.com/pop-arte/musica/"
          width="100%"
          height="100%"
          frameBorder="0"
        />
      </div>

      <RadioPlayer />
    </div>
  )
}

export default News
