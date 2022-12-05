import '../../styles/components/Contact.css';

export const Contact = () => {
    return (
        <div className="Contact" id="contact">
            <h1 className="Contact-title">Contáctanos</h1>
            <p className="Contact-text">
                Estamos aquí para ayudar! Envíenos cualquier pregunta que 
                tenga. Esperamos con interés escuchar de usted.
            </p>
            <div className="Contact-form">
                <div className="Contact-form-row1">
                    <input placeholder="Nombre" className="Contact-form-row1-input" type="text" />
                    <input placeholder="Asunto" className="Contact-form-row1-input" type="text" />
                </div>

                <input placeholder="Correo electrónico" className="Contact-form-row1-input" type="text" />
                <textarea placeholder="Mensaje" className="Contact-form-row1-input"></textarea>
                <button type="button" className="Contact-form-button">Contáctanos</button>
            </div>
        </div>
    )
}