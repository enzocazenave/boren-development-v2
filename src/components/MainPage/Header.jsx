import '../../styles/components/Header.css';
import RectangleLogo from '../../assets/logos/rectangle-logo.png';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="Header">
            <img className="Header-image" src={ RectangleLogo } />
            <nav className="Header-nav">
                <Link to="/" className="Header-nav-link" href="#">INICIO</Link>
                <Link to="/" className="Header-nav-link" href="#">NOSOTROS</Link>
                <Link to="/" className="Header-nav-link" href="#">SERVICIOS</Link>
                <Link to="/" className="Header-nav-link" href="#">CONTACTO</Link>
            </nav>
        </header>
    )
}