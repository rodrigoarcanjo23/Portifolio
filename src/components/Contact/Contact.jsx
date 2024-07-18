import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "495b40eb-9507-4458-8b91-85861d4351ef");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Fazer orçamento</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Entre em contato</h1>
                    <p>Atualmente estou disponível para assumir novos projetos, então fique à vontade para me enviar uma mensagem sobre qualquer coisa em que você queira que eu trabalhe. Você pode entrar em contato a qualquer momento.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>rodrigoarcanjo690@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>85-994108984</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>Fortaleza-CE</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Seu Nome</label>
                    <input type="text" placeholder='Digite seu nome' name='name' />
                    <label htmlFor="">Seu E-mail</label>
                    <input type="text" placeholder='Digite seu E-mail' name='email' />
                    <label htmlFor="Digite sua mensagem aqui">Mensagem</label>
                    <textarea name="message" rows="8" placeholder='Digite sua mensagem'></textarea>
                    <button type='submit' className='contact-submit'>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
