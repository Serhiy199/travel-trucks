import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getCampers } from '../../campers-api';
import CampersList from '../../components/CampersList/CampersList';
import Loader from '../../components/Loader/Loader';
import { catalog } from './CatalogPage.module.css';
import Error from '../../components/Error/Error';

export default function CatalogPage() {
    const [campers, setCampers] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [querySearch, setQuerySearch] = useSearchParams();

    useEffect(() => {
        async function getData() {
            try {
                setError(false);
                setLoading(true);
                const data = await getCampers();
                setCampers(data);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        getData();
    }, []);
    return (
        <div className={catalog}>
            {error && <Error />}
            {loading && <Loader />}
            <CampersList campers={campers} />
        </div>
    );
}
7;
