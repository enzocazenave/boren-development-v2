import { Routes, Route } from 'react-router-dom';
import { MainPage, NotFound } from '../pages';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={ <MainPage /> } />
            <Route path="/*" element={ <NotFound /> } />
        </Routes>
    )
}