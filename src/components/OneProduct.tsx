// import { SingleProduct } from "../services/productService"
import { RatingsProduct } from '../services/productService'
import { FaStar } from 'react-icons/fa'
import RatingStars from './RatingStars'

interface OneProductProps {
    id: number,
    name: string,
    image: string,
    description: string,
    current_price: number,
    amount: number,
    rarity: string,
    type: string,
    ratings: RatingsProduct,
    release_date: number
}

const OneProduct = ({ name, image, current_price, rarity, ratings }: OneProductProps) => {

    const totalRating = Object.values(ratings).reduce((total, value) => total + value, 0)
    const averageRating = totalRating / 5;
    const floorAverageRating = Math.floor(averageRating)


    return (
        <div className=' tw-flex tw-justify-center tw-py-3 '>
            <div className='lg:tw-w-72 tw-bg-slate-100 tw-text-center '>
                <img src={image} alt={name} />
                <div className='tw-border-b-2 tw-border-l-2 tw-border-r-2 tw-border-gray-300 tw-py-2'>
                    <p className='tw-text-purple-800 tw-font-bold tw-mb-1'>{name}</p>
                    <p className='tw-text-purple-800 tw-mb-1'>Price: {current_price}$ - {rarity}</p>
                </div>
                <div className='tw-py-2 tw-border-b-2 tw-border-l-2 tw-border-r-2 tw-border-gray-300'>
                    <RatingStars rating={averageRating} floorAverageRating={floorAverageRating} />
                    <p>RATING<span className='tw-font-bold'> {averageRating}</span> /5 from {totalRating}</p>
                </div>
            </div>

        </div>
    )
}

export default OneProduct
