import React from "react";
import Imagem from './ImagemPopFundo.webp'
import './Background.css'

const ComponentBackground = () => {
    return (
        <div className="container-image">
            <img src={Imagem} alt="background" />
        </div>
    );
};

export default ComponentBackground;