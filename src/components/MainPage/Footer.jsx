import '../../styles/components/Footer.css';
import RectangleLogo from '../../assets/logos/rectangle-logo.png';
import { Envelope, Telephone, Location } from '../Icons';

export const Footer = () => {
    return (
        <footer>
            <div className="Footer-section">
                <img className="Footer-image" src={ RectangleLogo } alt="Boren Development" />
                <div className="Footer-separator"></div>
            </div>
            <div className="Footer-section">
                <div className="Footer-separator"></div>
                <div className="Footer-section-container">
                    <div className="Footer-section-info">
                        <Telephone width={ 30 } />
                        <p>+54 9 11 4528 0608</p>
                    </div>
                    <div className="Footer-section-info">
                        <Envelope width={ 30 } />
                        <p>boren@development.com</p>
                    </div>
                    <div className="Footer-section-info">
                        <Location width={ 30 } />
                        <p>Quilmes, Buenos Aires.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}