import { useParams } from 'react-router-dom';
import { Header } from '../components';

export const MorePage = () => {

    const { service } = useParams();

    return (
        <>
            <Header />
            <h1>Landing Page</h1>
        </>
    ) 
}