import { Link } from 'react-router-dom';
import { container, title, text } from './Error.module.css';
import Button from '../../components/Button/Button';

export default function Error() {
    return (
        <main className={container}>
            <h2 className={title}>Construction 🚧</h2>
            <p className={text}>
                Whoops! You weren't supposed to see this. Check back a bit later!
            </p>
            <Link to={'/'}> {<Button text="Go home page" />}</Link>
        </main>
    );
}
