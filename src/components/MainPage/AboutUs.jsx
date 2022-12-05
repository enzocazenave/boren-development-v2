import '../../styles/components/AboutUs.css';

export const AboutUs = () => {

    const handleOnClick = () => {
        const contactSection = document.getElementById('contact');

        contactSection.scrollIntoView({
            behavior: 'smooth'
        });
    }

    return (
        <div className="AboutUs-container">
            <h1 className="AboutUs-container-title">
                SOBRE NOSOTROS
            </h1>
            <p className="AboutUs-container-text">
                Nos enfocamos en el diseño y desarrollo Web.<br/> 
                Desarrollamos tu página profesional, ya sea landing page, 
                panel administrativo o página web.<br/>
                ¡y mucho más! Hacé tu consulta ahora
            </p>
            <button onClick={ handleOnClick } className="AboutUs-container-button">
                Contáctanos 
            </button>
        </div>
    )
}
