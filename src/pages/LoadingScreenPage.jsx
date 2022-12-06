import '../styles/pages/LoadingScreenPage.css';
import RectangleLogo from '../assets/logos/rectangle-logo.webp';

export const LoadingScreenPage = () => {
    return (
        <div className="Loader">
            <img className="Loader-logo" src={ RectangleLogo } />
        </div>
    ) 
}
