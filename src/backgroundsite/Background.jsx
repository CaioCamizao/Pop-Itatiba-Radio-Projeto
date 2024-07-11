import React from "react";
import Imagem from './Vale_quanto_toca-690113_1920-1080-0-0.webp'
import './Background.css'

const ComponentBackground = () => {
    return (
        <div className="container-image">
            <img src={Imagem} alt="background" />
        </div>
    );
};

export default ComponentBackground;