import '../../styles/components/Services.css';
import { Link } from 'react-router-dom';

export const Services = () => {
    return (
        <div className="Services-container" id="services">
            <h1 className="Services-container-title">
                Nuestros servicios
            </h1>
            <div className="Services-container-cards">
                <div className="Services-container-cards-card">
                    <div>
                        <img alt="Imagen de Landing Page" className="Services-container-cards-card-image"  src="https://cdn.discordapp.com/attachments/1008885821027405958/1040741422980157490/22817910_85682372133663.jpg"/>

                        <div className="Services-container-cards-card-description">
                            <h3 className="Services-container-cards-card-title">Landing Page</h3>
                            <p className="Services-container-cards-card-text">
                                Una landing page es una página donde las personas llegan para conocer tu propuesta
                                y realizar una acción que muchas veces es
                                contactarse con usted.
                            </p>
                        </div>
                    </div>
                    <a href="#contact" className="Services-container-cards-card-button">
                        Más información
                    </a>
                </div>
                <div className="Services-container-cards-card">
                    <div>
                        <img alt="Imagen de Pagina Web" className="Services-container-cards-card-image" src="https://ayudahosting.online/wp-content/uploads/2019/05/loginpage-tml.png" />
                        <div className="Services-container-cards-card-description">
                            <h3 className="Services-container-cards-card-title">Página Web</h3>
                            <p className="Services-container-cards-card-text">
                                Página o sitio web con usuarios 
                                (Inicio de sesión, Crear cuenta), personalizar perfiles, etc.
                            </p>
                        </div>
                    </div>
                    <a href="#contact" className="Services-container-cards-card-button">
                        Más información
                    </a>
                </div>
                <div className="Services-container-cards-card">
                    <div>
                        <img alt="Imagen de Panel administrativo" className="Services-container-cards-card-image" src="https://kinsta.com/es/wp-content/uploads/sites/8/2018/03/panel-de-administración-de-wordress-3.png" />
                        <div className="Services-container-cards-card-description">
                            <h3 className="Services-container-cards-card-title">Panel Administrativo</h3>
                            <p className="Services-container-cards-card-text">
                                Los responsables del sitio pueden modificar algunos 
                                contenidos de la app. Incluso se pueden crear niveles y permisos 
                                de usuarios para limitar las acciones que pueda hacer cada uno 
                                dentro de la aplicación web.
                            </p>
                        </div>
                    </div>
                    <a href="#contact" className="Services-container-cards-card-button">
                        Más información
                    </a>
                </div>
            </div>
        </div>
    )
}