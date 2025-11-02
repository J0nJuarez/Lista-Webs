import React from 'react'
import './liquid.css'

interface WrapperProps {
    titulo?: string;
    descripcion?: string;
    logoUrl?: string;
    tecnologias?: string[];
    url?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ titulo, descripcion, logoUrl, tecnologias, url }) => {
  return (
    <div id="wrapper-description">
      <div className="liquidGlass-wrapper menu-wrapper">
        <div className="liquidGlass-effect-wrapper"></div>
        <div className="liquidGlass-tint-wrapper"></div>
        <div className="liquidGlass-shine-wrapper"></div>
        <div className="liquidGlass-text-wrapper">
         <span>
          <img src={logoUrl} alt="Logo"/>
          <h1>{titulo}</h1>
         </span>
          <p className='description'>{descripcion}</p>
            {tecnologias && tecnologias.length > 0 && (
            <p className='technologies'>
                <strong>Tecnologías:</strong>
                <ul>
                {tecnologias.map((tec, index) => (
                    <li key={index} className="rounded-lg" id={`${tec}`}>{tec}</li>
                ))}
                </ul>
            </p>
            )}
            <a href={url} target="_blank" className="text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" rel="noopener noreferrer">Visitar Sitio Web</a>
        </div>
      </div>
    </div>
  )
}

export default Wrapper