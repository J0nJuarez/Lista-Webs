import React from 'react'
import './boton.css'

interface WrapperProps {
    titulo?: string;
    descripcion?: string;
    logoUrl?: string;
    tecnologias?: string[];
}

const Wrapper: React.FC<WrapperProps> = ({ titulo, descripcion, logoUrl, tecnologias }) => {
  return (
    <div className="wrapper">
      <div className="liquidGlass-wrapper menu">
        <div className="liquidGlass-effect"></div>
        <div className="liquidGlass-tint"></div>
        <div className="liquidGlass-shine"></div>
        <div className="liquidGlass-text">
         <div>
          <h1>{titulo}</h1>
          <img src={logoUrl} alt="Logo" style={{ width: '100px', height: '100px' }}/>
         </div> 
          <div>{descripcion}</div>
            {tecnologias && tecnologias.length > 0 && (
            <div>
                <strong>Tecnologías:</strong>
                <ul>
                {tecnologias.map((tec, index) => (
                    <li key={index}>{tec}</li>
                ))}
                </ul>
            </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default Wrapper