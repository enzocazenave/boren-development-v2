import '../../styles/components/Footer.css';
import RectangleLogo from '../../assets/logos/rectangle-logo.webp';
import { Envelope, Telephone, Location } from '../Icons';

export const Footer = () => {
    return (
        <footer>
            <div className="Footer-section">
                <img alt="Logo de Boren Development" className="Footer-image" src={ RectangleLogo } />
                <div className="Footer-separator"></div>
            </div>
            <div className="Footer-section">
                <div className="Footer-separator"></div>
                <div className="Footer-section-container">
                    <div className="Footer-section-info">
                        <Telephone className="Footer-section-info-image" width={ 30 } />
                        <a href="https://api.whatsapp.com/send?phone=5491145280608">+54 9 11 4528 0608</a>
                    </div>
                    <div className="Footer-section-info">
                        <Envelope className="Footer-section-info-image" width={ 30 } />
                        <p>soporte@borendev.com</p>
                    </div>
                    <div className="Footer-section-info">
                        <Location className="Footer-section-info-image" width={ 30 } />
                        <p>Quilmes, Buenos Aires.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}