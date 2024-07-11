import React from 'react';
import ReactPlayer from 'react-player';
import './RadioPlayer.css';

const RadioPlayer = () => {
    return (
      <div className="radio-player-container">
      <ReactPlayer
        className="radio-player"
        url="https://stream.zeno.fm/r6bg6du4by8uv"
        playing
        controls
        width="100%"
      />
      </div>
    );
  };

export default RadioPlayer;
