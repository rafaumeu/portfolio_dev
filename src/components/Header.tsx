import React from 'react'
import { FaGithub } from 'react-icons/fa'
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiReact,
} from 'react-icons/si'
import caretDoubleDown from '../assets/icons/CaretDoubleDown.svg'
import codeImage from '../assets/icons/code.svg'
import profileImage from '../assets/images/1532522347212.jpg'
import '../styles/intro.css'

const Header: React.FC = () => {
  return (
    <>
      <div className="bg-intro">
        <header>
          <div className="container">
            <div id="intro" className="container">
              <div id="profile-container">
                <img
                  className="profile"
                  src={profileImage}
                  alt="foto de perfil"
                />
                <img className="code" src={codeImage} alt="" />
              </div>
              <div className="presentation">
                <span>
                  Hello World! Meu nome é
                  <span className="name"> Rafael Zendron </span>e sou
                </span>
                <h1>Desenvolvedor Fullstack</h1>
                <p className="container">
                  Transformo necessidades em aplicações reais, evolventes e
                  funcionais. Desenvolvo sistemas através da minha paixão pela
                  tecnologia, contribuindo com soluções inovadoras e eficazes
                  para desafios complexos.
                </p>
              </div>
              <nav id="badges">
                <ul className="container">
                  <li>
                    <FaGithub className="github" />
                    <span className="badge">Github</span>
                  </li>
                  <li>
                    <SiHtml5 className="html" />
                    <span className="badge">HTML</span>
                  </li>
                  <li>
                    <SiCss3 className="css" />
                    <span className="badge">CSS</span>
                  </li>
                  <li>
                    <SiJavascript className="js" />
                    <span className="badge">JS</span>
                  </li>
                  <li>
                    <SiReact className="react" />
                    <span className="badge">React</span>
                  </li>
                  <li>
                    <SiNodedotjs className="node" />
                    <span className="badge">Node</span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </div>
      <div className="container">
        <div id="background-gradient">
          <a href="#jobs">
            <img src={caretDoubleDown} alt="" />
          </a>
        </div>
      </div>
    </>
  )
}

export default Header
