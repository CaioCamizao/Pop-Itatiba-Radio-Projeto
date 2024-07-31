import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import './RadioPlayer.css'

const RadioPlayer = () => {
  const [playerInitialized, setPlayerInitialized] = useState(false)

  useEffect(() => {
    setPlayerInitialized(true)
  }, [])

  return (
    playerInitialized && (
      <div className="radio-player-container">
        <ReactPlayer
          className="radio-player"
          url="https://stream.zeno.fm/r6bg6du4by8uv"
          playing
          controls
          volume={0.1}
          config={{
            file: {
              forceAudio: true,
            },
          }}
        />
      </div>
    )
  )
}

export default RadioPlayer
