import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>Olá, me chamo Rodrigo Arcanjo,</span> sou desenvolvedor Frontend e Backend</h1>
      <p>Sou developer fullstack, venha conhecer mais sobre mim e me trabalho</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Conecte-se comigo</AnchorLink></div>
        <div className="hero-resume">Meu resumo</div>
      </div>
    </div>
  )
}

export default Hero
