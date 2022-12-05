import '../../styles/components/Clients.css';
import { Camera, Instagram } from '../Icons';

export const Clients = () => {
     return (
        <div className="Clients">
            <div className="Clients-container">
                <h1 className="Clients-container-title">Opiniones de nuestros clientes</h1>

                <div className="Clients-container-clients">
                    <div className="Clients-container-clients-client">
                        <div className="Clients-container-clients-client-image">
                            <Instagram width={ 65 } fill={ "rgba(0,0,0,0.1)" } />
                        </div>
                        <p className="Clients-container-clients-client-text">"Sé el primero"</p>
                    </div>
                    <div className="Clients-container-clients-client">
                        <div className="Clients-container-clients-client-image">
                            <Instagram width={ 65 } fill={ "rgba(0,0,0,0.1)" } />

                        </div>
                        <p className="Clients-container-clients-client-text">"Sé el primero"</p>
                    </div>
                    <div className="Clients-container-clients-client">
                        <div className="Clients-container-clients-client-image">
                            <Instagram width={ 65 } fill={ "rgba(0,0,0,0.1)" } />
                        </div>
                        <p className="Clients-container-clients-client-text">"Sé el primero"</p>
                    </div>
                </div>
            </div>
        </div>
    )
}