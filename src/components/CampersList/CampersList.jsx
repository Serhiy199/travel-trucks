import { Link, useLocation } from 'react-router-dom';
import Button from '../Button/Button';
import { listCamper, img, listMovie, title, listFavMov } from './CampersList.module.css';

export default function CampersList({ campers }) {
    const location = useLocation();

    const defaultImg =
        'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

    return (
        <ul className={listFavMov}>
            {campers.map(camper => {
                return (
                    <li key={camper.id} className={listCamper}>
                        <img
                            className={img}
                            src={
                                camper.gallery
                                    ? `https://ftp.goit.study/img/campers-test-task/${camper.id}-1.webp`
                                    : defaultImg
                            }
                            // width={292}
                            alt="poster"
                        />
                        <h2>{camper.name}</h2>
                        <p className={title}>{camper.description}</p>
                        <Link to={`/catalog/${camper.id}`} state={location}>
                            {' '}
                            {<Button text="Show more" />}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
