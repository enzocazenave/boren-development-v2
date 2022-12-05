import '../../styles/components/HomeHeader.css';

export const HomeHeader = () => {
    return (
        <nav className="HomeHeader-navbar">
            <a className="HomeHeader-navbar-link" href="#home" >INICIO</a>
            <a className="HomeHeader-navbar-link" href="#aboutus" >NOSOTROS</a>
            <a className="HomeHeader-navbar-link" href="#services" >SERVICIOS</a>
            <a className="HomeHeader-navbar-link" href="#contact" >CONTACTO</a>
        </nav>
    )
}
