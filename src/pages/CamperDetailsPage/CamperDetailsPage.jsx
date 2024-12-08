import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { CamperId } from '../../campers-api';
import Loader from '../../components/Loader/Loader';

export default function CamperDetailsPage() {
    const { camperId } = useParams();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getCinema() {
            try {
                if (!camperId) return;
                setError(false);
                setLoading(true);
                const data = await CamperId(camperId);

                setMovieData(data);
                setMovieGenres(data.genres);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        getCinema();
    }, [camperId]);

    return (
        <>
            {error && <p>Whoops, something went wrong! Please try reloading this page!</p>}
            {loading && <Loader />}
            Trucks page: {camperId}
        </>
    );
}
