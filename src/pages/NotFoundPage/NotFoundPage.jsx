import { Link } from 'react-router-dom';
import { container, title, text } from './NotFoundPage.module.css';
import Button from '../../components/Button/Button';

export default function NotFoundPage() {
    return (
        <main className={container}>
            <h2 className={title}>Construction 🚧</h2>
            <p className={text}>Oops! You weren't supposed to seee this. Check back a bit later!</p>
            <Link to={'/'}> {<Button text="Go home page" />}</Link>
        </main>
    );
}
