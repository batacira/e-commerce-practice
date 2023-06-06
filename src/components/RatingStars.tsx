import { FaStar } from 'react-icons/fa'

const RatingStars = ({ floorAverageRating }: any) => {
    let stars = null;

    if (floorAverageRating === 1) {
        stars = <span className='tw-flex tw-text-purple-800 tw-m-auto tw-mb-2'><FaStar /></span>;
    } else if (floorAverageRating === 2) {
        stars = <span className='tw-flex tw-text-purple-800 tw-m-auto tw-mb-2'><FaStar /> <FaStar /></span>;
    } else if (floorAverageRating === 3) {
        stars = <span className='tw-flex tw-text-purple-800 tw-m-auto tw-mb-2'><FaStar /> <FaStar /> <FaStar /></span>;
    } else if (floorAverageRating === 4) {
        stars = <span className='tw-flex tw-text-purple-800 tw-m-auto tw-mb-2'><FaStar /><FaStar /><FaStar /><FaStar /></span>;
    } else if (floorAverageRating === 5) {
        stars = <span className='tw-flex tw-text-purple-800 tw-m-auto tw-mb-2'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>;
    }
    return (
        <div className='tw-flex'>
            {stars}
        </div>
    )
}

export default RatingStars
