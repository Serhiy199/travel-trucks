import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getCampers } from '../../campers-api';
import CampersList from '../../components/CampersList/CampersList';
import Loader from '../../components/Loader/Loader';

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
        <div>
            {error && <p>Whoops, something went wrong! Please try reloading this page!</p>}
            {loading && <Loader />}
            <CampersList campers={campers} />
        </div>
    );
}
