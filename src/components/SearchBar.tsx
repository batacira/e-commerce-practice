import classNames from 'classnames';
// import { SetStateAction, Dispatch } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

interface SearchBarProps {
    expanded: boolean;
    toggle: (nextValue?: any) => void
}

const SearchBar = ({ expanded, toggle }: SearchBarProps) => {
    console.log(expanded);


    // const handleInputClick = () => {
    //     setExpanded(true);
    // };
    return (
        <div className='tw-hidden lg:tw-flex lg:tw-relative lg:tw-text-black'>
            <input type="text" onFocus={toggle} onBlur={toggle} className={classNames('lg:tw-py-2 lg:tw-px-4 lg:tw-transition-transform  lg:tw-duration-500 lg:tw-ease-in-out', { '-translate-x-full lg:tw-w-[775px] md:tw-w-[375px] lg:tw-z-10': expanded })} />
            <AiOutlineSearch size='28px' color='gray' className={`lg:tw-absolute lg:tw-right-2 lg:tw-top-1 lg:tw-flex lg:tw-items-center lg:tw-pl-1 lg:tw-cursor-pointer lg:tw-z-20`} />
        </div>
    )
}

export default SearchBar


/* ${ expanded ? '-translate-x-full tw-w-[650px] tw-z-10' : '' } `} */


/* {`tw-py-2 tw-px-4 tw-transition-transform  tw-duration-500 tw-ease-in-out  ${expanded ? '-translate-x-full tw-w-[650px] tw-z-10' : ''}`} */

/* { classNames('tw-py-2 tw-px-4 tw-transition-transform  tw-duration-500 tw-ease-in-out', { '-translate-x-full tw-w-[650px] tw-z-10': expanded }) } */ /* ovo je */