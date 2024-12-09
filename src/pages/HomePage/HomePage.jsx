import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { hero, heroTitle, heroText } from './HomePage.module.css';

export default function HomePage() {
    return (
        <section className={hero}>
            <div>
                <h1 className={heroTitle}>Campers of your dreams</h1>
                <h2 className={heroText}>You can find everything you want in our catalog</h2>
                <Link to={'/campers'}> {<Button text="View Now" />}</Link>
            </div>
        </section>
    );
}
