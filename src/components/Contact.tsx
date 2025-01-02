import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import arrowUp from '../assets/icons/arrow-up.svg'
import '../styles/contact.css'

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <div className="container">
        <header>
          <span>Contato</span>
          <h2>Gostou do meu trabalho?</h2>
          <p>Entre em contato ou acompanhe as minhas redes sociais!</p>
        </header>
      </div>
      <div className="container">
        <div className="social">
          <a
            href="https://www.linkedin.com/in/rafael-dias-zendron-528290132/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            <FaLinkedin />
            <span>Linkedin</span>
            <img src={arrowUp} alt="" />
          </a>
          <a
            href="https://www.instagram.com/rafaeldiaszendron/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            <FaInstagram />
            <span>Instagram</span>
            <img src={arrowUp} alt="" />
          </a>
          <a
            href="https://github.com/rafaumeu"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            <FaGithub />
            <span>GitHub</span>
            <img src={arrowUp} alt="" />
          </a>
          <a
            href="mailto:rafael.zendron22@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            <MdEmail />
            <span>E-mail</span>
            <img src={arrowUp} alt="" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
