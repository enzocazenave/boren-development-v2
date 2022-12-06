import '../styles/pages/NotFound.css';
import RectangleLogo from '../assets/logos/rectangle-logo.webp';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate('/'), 3000)
    }, []);    

    return (
        <div className="NotFound-container">
            <h1 className="NotFound-container-title">404</h1>
            <h3 className="NotFound-container-description">Esta no es la página que estás buscando.</h3>
            <img alt="Logo de Boren Development" className="NotFound-container-logo" src={ RectangleLogo } />
            <h4 className="NotFound-container-redirecting">Serás redireccionado en 3 segundos.</h4>
        </div>
    )
}