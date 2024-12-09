import { FaStar } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr';
import { ratingCamper, ratingText, iconStar, iconLocation } from './InfoLocation.module.css';

export default function InfoLocation({ camper }) {
    const reviews = camper.reviews ? camper.reviews : [];

    return (
        <div className={ratingCamper}>
            <span className={ratingText}>
                <FaStar className={iconStar} /> {camper.rating}{' '}
                <span>({reviews.length} Reviews)</span>
            </span>
            <span className={ratingText}>
                <GrMapLocation className={iconLocation} /> {camper.location}
            </span>
        </div>
    );
}
