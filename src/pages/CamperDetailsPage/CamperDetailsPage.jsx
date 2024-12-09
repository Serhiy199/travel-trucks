import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { CamperId } from '../../campers-api';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import { container, link } from './CamperDetailsPage.module.css';

export default function CamperDetailsPage() {
    const [camperData, setCamperData] = useState([]);
    const { camperId } = useParams();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getCamper() {
            try {
                if (!camperId) return;
                setError(false);
                setLoading(true);
                const data = await CamperId(camperId);

                setCamperData(data);

                // setMovieGenres(data.genres);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        getCamper();
    }, [camperId]);

    console.log(camperData);

    return (
        <div className={container}>
            {error && <Error />}
            {loading && <Loader />}
            <section>
                <h2 className={name}>{camperData.name}</h2>
            </section>
            <Link className={link} to={'features'}>
                Features
            </Link>
            <Link className={link} to={'reviews'}>
                Reviews
            </Link>
            <Outlet />
        </div>
    );
}
