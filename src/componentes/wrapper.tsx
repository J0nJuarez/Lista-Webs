import React from 'react'
import './liquid.css'

interface WrapperProps {
    titulo?: string;
    descripcion?: string;
    logoUrl?: string;
    tecnologias?: string[];
}

const Wrapper: React.FC<WrapperProps> = ({ titulo, descripcion, logoUrl, tecnologias }) => {
  return (
    <div id="wrapper-description">
      <div className="liquidGlass-wrapper menu-wrapper">
        <div className="liquidGlass-effect-wrapper"></div>
        <div className="liquidGlass-tint-wrapper"></div>
        <div className="liquidGlass-shine-wrapper"></div>
        <div className="liquidGlass-text-wrapper">
         <span>
          <h1>{titulo}</h1>
          <img src={logoUrl} alt="Logo" style={{ width: '100px', height: '100px' }}/>
         </span>
          <span className='description'>{descripcion}</span>
            {tecnologias && tecnologias.length > 0 && (
            <span className='technologies'>
                <strong>Tecnologías:</strong>
                <ul>
                {tecnologias.map((tec, index) => (
                    <li key={index}>{tec}</li>
                ))}
                </ul>
            </span>
            )}
        </div>
      </div>
    </div>
  )
}

export default Wrapper