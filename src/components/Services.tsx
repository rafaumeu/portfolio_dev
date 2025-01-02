import React from 'react'
import '../styles/services.css'

import devices from '../assets/icons/devices.svg'
import hardDrives from '../assets/icons/hardDrives.svg'
import infinity from '../assets/icons/infinity.svg'

const Services: React.FC = () => {
  return (
    <section id="services">
      <div className="container">
        <header>
          <span className="header-span">Meus serviços</span>
          <h2 className="header-title">Como posso ajudar o seu negócio</h2>
        </header>
      </div>
      <div className="cards">
        <div className="grid-container">
          <div className="grid-item">
            <img src={devices} alt="" />
            <h3>Websites e Aplicativos</h3>
            <p>Desenvolvimento de interfaces</p>
          </div>
          <div className="grid-item">
            <img src={hardDrives} alt="" />
            <h3>API e banco de dados</h3>
            <p>Criação de serviços do sistema</p>
          </div>
          <div className="grid-item">
            <img src={infinity} alt="" />
            <h3>DevOps</h3>
            <p>Gestão e infraestrutura da aplicação</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
