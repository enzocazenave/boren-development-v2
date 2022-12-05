import '../styles/pages/MainPage.css';
import RectangleLogo from '../assets/logos/rectangle-logo.png';
import { HomeHeader, AboutUs, Instagram, Features, Clients, Services, Follow, Contact, Info, Footer } from '../components/';
import '../helpers/Scrollbar.js';
import { useEffect } from 'react';
import { useState } from 'react';
import { LoadingScreenPage } from './';

export const MainPage = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, [])

    return (
        <>
            {
                (loading) && <LoadingScreenPage /> 
            }
            <div id="scrollbar-line" className="scrollbar-line"></div>

            <div className="MainPage-home" id="home">
                <div className="MainPage-home-left">
                    <img className="MainPage-home-left-image" src={ RectangleLogo } />
                </div>
                <div className="MainPage-home-right">
                    <HomeHeader />
                    <AboutUs />

                    <a target="__blank" href="https://www.instagram.com/borendev/" className="MainPage-home-right-social">
                        <Instagram width={ 48 } fill={ '#F5F5F5' } /> 
                    </a>
                </div>
            </div>

            <Features />  
            <Info />
            <Services /> 
            <Follow />
            <Contact />
            <Clients />   
            <Footer />
        </>
    )
}