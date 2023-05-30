import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchBar = () => {
    const [expanded, setExpanded] = useState(false);
    console.log(expanded);


    const handleInputClick = () => {
        setExpanded(true);
    };
    return (
        <div className='tw-flex tw-relative tw-text-black'>
            <input type="text" onClick={handleInputClick} className={`tw-py-2 tw-px-4 tw-duration-500 tw-ease-in-out tw-height-200px  ${expanded ? ' tw-w-[500px] tw-z-10' : 'tw-z-0 tw-w-36'}`} />
            <AiOutlineSearch size='28px' color='gray' className='tw-absolute tw-right-2 tw-top-1 tw-flex tw-items-center tw-pl-1 tw-cursor-pointer tw-z-20' onClick={() => setExpanded(false)} />
        </div>
    )
}

export default SearchBar


/* tw-transition-width tw-duration-300 tw-ease-in-out tw-w-200 tw-focus:w-full */
/* tw-w-80 * / /* ovo radi */