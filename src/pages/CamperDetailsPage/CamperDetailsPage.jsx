import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { CamperId } from '../../campers-api';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';

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
        <>
            {error && <Error />}
            {loading && <Loader />}
            Trucks page: {camperId}
        </>
    );
}
