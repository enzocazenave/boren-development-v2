import '../../styles/components/Header.css';
import RectangleLogo from '../../assets/logos/rectangle-logo.webp';
import '../../helpers/Scrollbar.js';

export const Header = () => {
    return (
        <header className="Header" id="header-fixed">
            <div className="Header-container">
                <img alt="Logo de Boren Development" className="Header-image" src={ RectangleLogo } />
                <nav className="Header-nav">
                    <a href="#home" className="Header-nav-link">INICIO</a>
                    <a href="#aboutus" className="Header-nav-link">NOSOTROS</a>
                    <a href="#services" className="Header-nav-link">SERVICIOS</a>
                    <a href="#contact" className="Header-nav-link">CONTACTO</a>
                </nav>
            </div>
            <div id="scrollbar-line" className="scrollbar-line"></div>
        </header>
    )
}
