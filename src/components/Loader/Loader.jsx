import { InfinitySpin } from 'react-loader-spinner';
import { load } from './Loader.module.css';

export default function Loader() {
    return (
        <p className={load}>
            <InfinitySpin
                visible={true}
                width="200"
                color="#E44848"
                ariaLabel="infinity-spin-loading"
            />
        </p>
    );
}
