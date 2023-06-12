import { useState } from 'react';
import { t } from 'i18next';
import { SingleProduct as OneProductProps } from '../services/productService'
import RatingStars from './RatingStars'
import { Rating } from 'react-simple-star-rating';


const OneProduct = ({ name, image, current_price, rarity, ratings }: OneProductProps) => {
    const [rating, setRating] = useState(5);

    const totalRating = Object.values(ratings).reduce((total, value) => total + value, 0)
    const averageRating = totalRating / 5;
    const floorAverageRating = Math.floor(averageRating)

    const handleRating = (rate: number) => {
        setRating(rate);
    };

    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value: number, index: number) => console.log(value, index)

    return (
        <div className=' tw-flex tw-justify-center tw-py-3 '>
            <div className={`lg:tw-w-72 tw-bg-slate-100 tw-text-center tw-rounded-t-md tw-overflow-hidden tw-cursor-pointer tw-shadow-3xl `}>
                <img src={image} alt={name} className=' tw-border-l-2 tw-border-r-2 tw-border-gray-300' />
                <div className='tw-border-b-2 tw-border-l-2 tw-border-r-2 tw-border-gray-300 tw-py-2'>
                    <p className='tw-text-purple-800 tw-font-bold tw-mb-1'>{name}</p>
                    <p className='tw-text-purple-800 tw-mb-1'>{t("price")}: {current_price}$ - {rarity}</p>
                </div>
                <div className='tw-py-2 tw-border-b-2 tw-border-l-2 tw-border-r-2 tw-border-gray-300'>
                    {/* <RatingStars rating={averageRating} floorAverageRating={floorAverageRating} /> */}
                    <div className='tw-flex tw-justify-center'>
                        <Rating
                            onClick={handleRating}
                            onPointerEnter={onPointerEnter}
                            onPointerLeave={onPointerLeave}
                            onPointerMove={onPointerMove}
                            // initialValue={averageRating}
                            // className='tw-bg-red-800 tw-flex '
                            style={{ display: 'flex' }}
                            emptyStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        />
                    </div>
                    <p>{t("rating")}<span className='tw-font-bold'> {averageRating}</span>/5 {t('from')} {totalRating}</p>
                </div>
            </div>

        </div>
    )
}

export default OneProduct


/* initialValue={floorAverageRating}
                            onClick={handleRating}
                            iconsCount={floorAverageRating}
                            allowHover={false}
                            // fillClassName={'flex'}
                            // readonly={true}
                            emptyStyle={{
                                fontSize: '20px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                // color: 'blue'

                                // color: 'transparent', // Postavljamo boju teksta na transparentnu da bi se neobojene zvezde sakrile, ali i dalje zauzimaju prostor
                            }}
                            fillStyle={{
                                fontSize: '20px',
                                color: 'purple',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',

                            }}
                            size={27} */

/* <Rating initialValue={floorAverageRating} onClick={handleRating} fillClassName={'flex'} emptyStyle={{ fontSize: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} fillStyle={{ fontSize: '20px', color: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center', }} allowHover={false} size={27} /> */

// Druga verzija 
/* <Rating
                            initialValue={rating}
                            onClick={handleRating}
                            fillClassName={'flex'}
                            emptyStyle={{
                                fontSize: '20px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'transparent', // Postavljamo boju teksta na transparentnu da bi se neobojene zvezde sakrile, ali i dalje zauzimaju prostor
                            }}
                            fillStyle={{
                                fontSize: '20px',
                                color: 'red',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            allowHover={false}
                            size={27}
                        /> */