import React from 'react'
import './boton.css'

interface BotonProps {
    logoUrl?: string;
    onClick?: () => void;
}

const Boton: React.FC<BotonProps> = ({ logoUrl, onClick }) => {
  return (
  <button className="btn-small" onClick={onClick}>
  <div className="btn-small-content">
    <div className="btn-small-icon">
      {logoUrl && <img src={logoUrl} className='' alt="Logo" />}
    </div>
    <h2 className="btn-small-text">Ver Web</h2>
  </div>
</button>

  )
}

export default Boton