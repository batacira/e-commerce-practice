import { SetStateAction, Dispatch } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

interface SearchBarProps {
    expanded: boolean;
    setExpanded: Dispatch<SetStateAction<boolean>>
}

const SearchBar = ({ expanded, setExpanded }: SearchBarProps) => {
    console.log(expanded);


    const handleInputClick = () => {
        setExpanded(true);
    };
    return (
        <div className='tw-flex tw-relative tw-text-black'>
            <input type="text" onClick={handleInputClick} className={`tw-py-2 tw-px-4 tw-transition-transform  tw-duration-500 tw-ease-in-out  ${expanded ? '-translate-x-full tw-w-[650px] tw-z-10' : ''}`} />
            <AiOutlineSearch size='28px' color='gray' className={`tw-absolute tw-right-2 tw-top-1 tw-flex tw-items-center tw-pl-1 tw-cursor-pointer tw-z-20`} onClick={() => setExpanded(false)} />
        </div>
    )
}

export default SearchBar


