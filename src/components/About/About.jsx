import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>Sobre mim</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Sou profissional da categoria Design e Tecnologia, e faço serviços relacionados a Aplicativos para celular e redes sociais, Marketing Online, Materiais promocionais, Criação de Logos, Desenvolvimento de Sites e Sistemas, Convites, Diagramação, Produção gráfica, Criação de Marca, Ux - Ui Design, Desenvolvimento de Games, Automação Comercial.</p>
                       
                    </div>
                    <div className="about-skills">
                        
                        
                        <div className="about-skill"><p>React.js</p><hr style={{width:"80%"}} /></div>
                        <div className="about-skill"><p>Next js</p><hr style={{width:"60%"}} /></div>
                        <div className="about-skill"><p>Node.js</p><hr style={{width:"50%"}} /></div>
                        <div className="about-skill"><p>Java</p><hr style={{width:"70%"}} /></div>
                        <div className="about-skill"><p>Spring Boot</p><hr style={{width:"75%"}} /></div>
                        <div className="about-skill"><p>Microsserviços</p><hr style={{width:"60%"}} /></div>
                       
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>+5</h1>
                    <p>ANOS DE EXPERIÊNCIA</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>+90</h1>
                    <p>PROJETOS COMPLETOS</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>+50</h1>
                    <p>CLIENTES SATISFEITOS</p>
                </div>
            </div>
        </div>
    )
}

export default About
