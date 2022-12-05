import '../../styles/components/Features.css';

import { FeatureColumn } from './';
import { Brain, Trophy, Diamond, Clock } from '../Icons/';

export const Features = () => {
    return (
        <div className="Features-container" id="aboutus">
            <h1 className="Features-container-title">Características especiales</h1>
            <div className="Features-container-columns">
                <FeatureColumn icon={ <Brain width={60} /> } title="Diseño" text="Si puede explicarlo e imaginarlo, nosotros podemos crearlo." />
                <FeatureColumn icon={ <Diamond width={60} /> } title="Mejor calidad" text="Garantizamos tu satisfacción." />
                <FeatureColumn icon={ <Clock width={60} /> } title="Soporte 24/7" text="Nuestro soporte telefónico está Siempre disponible para usted." />
                <FeatureColumn icon={ <Trophy width={60} /> } title="Precio competitivo" text="La mejor relación precio-calidad" />
            </div>
        </div>
    )
}
