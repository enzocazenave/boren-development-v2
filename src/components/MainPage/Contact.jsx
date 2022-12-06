import '../../styles/components/Contact.css';
import { useForm } from '../../hooks/useForm';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const initialForm = {
    name: '',
    affair: '',
    email: '',
    message: ''
}

export const Contact = () => {
    
    const { name, affair, email, message, onInputChange, onResetForm  } = useForm(initialForm);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleContact = (e) => {
        e.preventDefault();

        if (name.length < 2) return setError("Debes completar todos los campos");
        if (message.length < 2) return setError("Debes completar todos los campos");
        if (email.length < 2) return setError("Debes completar todos los campos");

        onResetForm();
        setError('');

        emailjs.sendForm('service_vegbsz5', 'template_h8lcyqg', e.target, '7udVIrNmsK1Tmz1WL').then(() => {
            setSuccess('Mensaje enviado ✅');
        }).catch(error => setError(error));  
    }

    return (
        <div className="Contact" id="contact">
            <h1 className="Contact-title">Contáctanos</h1>
            <p className="Contact-text">
                Estamos aquí para ayudar! Envíenos cualquier pregunta que 
                tenga. Esperamos con interés escuchar de usted.
            </p>
            <form onSubmit={ handleContact } className="Contact-form">
                <div className="Contact-form-row1">
                    <input value={ name } onChange={ onInputChange } name="name" placeholder="Nombre" className="Contact-form-row1-input" type="text" />
                    <input value={ affair } onChange={ onInputChange } name="affair" placeholder="Asunto" className="Contact-form-row1-input" type="text" />
                </div>

                <input value={ email } onChange={ onInputChange } name="email" placeholder="Correo electrónico" className="Contact-form-row1-input" type="text" />
                <textarea value={ message } onChange={ onInputChange } name="message" placeholder="Mensaje" className="Contact-form-row1-input"></textarea>
                <button disabled={ name.length < 2 } type="submit" className="Contact-form-button">Contáctanos</button>
                { (error.length > 0) && <h4 style={{ color: 'red', textAlign: 'center' }}>{ error }</h4> }
                { (success.length > 0) && <h4 style={{ color: 'green', textAlign: 'center' }}>{ success }</h4> }
            </form>
        </div>
    )
}