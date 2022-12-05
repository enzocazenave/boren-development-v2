import { Instagram, Linkedin } from '../Icons';
import '../../styles/components/Follow.css';

export const Follow = () => {
    return (
        <div className="Follow-container">
            <div className="Follow-container-blur">
                <h1 className="Follow-container-title">Seguinos en redes</h1>
                <div className="Follow-container-circles">
                    <a href="#" className="Follow-container-circle">
                        <Instagram width={ 40 } height={ 40 } />
                    </a>
                    <a href="#" className="Follow-container-circle">
                        <Linkedin width={ 40 } height={ 40 } />
                    </a>
                </div>
            </div>
        </div>
    )
}
