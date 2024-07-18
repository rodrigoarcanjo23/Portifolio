import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={footer_logo} alt="" />
            <p>Sou graduado em Análise e desenvolvimento de sistemas, Dev Frontend & Backend, Web developer há mais de 5 anos.</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Digite seu email' />
            </div>
            <div className="footer-subscribe">Inscrever</div>
        </div>
      </div>
      <hr />
      <div className='footer-bottom'>
        <p className="footer-bottom-left">© Rodrigo Arcanjo_DEV. Todos os direitos reservados</p>
        <div className="footer-bottom-right">
            <p>Termos de serviços</p>
            <p>Políticas de privacidade</p>
            <p>Conecte-se comigo</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
