import { Routes, Route } from 'react-router-dom';
import { MainPage, MorePage, NotFound } from '../pages';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={ <MainPage /> } />
            <Route path="/more/:service" element={ <MorePage /> } />
            <Route path="/*" element={ <NotFound /> } />
        </Routes>
    )
}