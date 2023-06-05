import { Dispatch, SetStateAction } from 'react'

interface SearchMobileBarProps {
    setMobileMenuOpen: Dispatch<SetStateAction<boolean>>
}

const SearchMobileBar = ({ setMobileMenuOpen }: SearchMobileBarProps) => {
    return (
        <div className='tw-px-4 tw-flex tw-items-center tw-justify-center tw-py-4 tw-max-w-7xl  lg:tw-hidden tw-bg-gradient-to-r tw-from-blue-500 tw-to-slate-500 tw-roun'>
            <input type="text" className='tw-h-10 tw-w-full tw-min-w-64 tw-px-4 tw-rounded-lg ' placeholder='Search...' onClick={() => setMobileMenuOpen(false)} />
        </div>
    )
}

export default SearchMobileBar
