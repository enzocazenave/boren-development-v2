import { Instagram, Linkedin } from '../Icons';
import '../../styles/components/Follow.css';

export const Follow = () => {
    return (
        <div className="Follow-container">
            <div className="Follow-container-blur">
                <h1 className="Follow-container-title">Seguinos en redes</h1>
                <div className="Follow-container-circles">
                    <a target="__blank" href="https://www.instagram.com/borendev/" className="Follow-container-circle">
                        <Instagram className="Follow-container-circle-icon" width={ 40 } height={ 40 } />
                    </a>
                    <a className="Follow-container-circle">
                        <Linkedin className="Follow-container-circle-icon" width={ 40 } height={ 40 } />
                    </a>
                </div>
            </div>
        </div>
    )
}
