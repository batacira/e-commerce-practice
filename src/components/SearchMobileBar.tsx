import React from 'react'

const SearchMobileBar = () => {
    return (
        <div className='tw-px-4 tw-flex tw-items-center tw-justify-center tw-py-4 tw-max-w-7xl  lg:tw-hidden'>
            <input type="text" className='tw-h-10 tw-w-full tw-min-w-64 tw-mx-4 tw-px-4 ' placeholder='Search...' />

        </div>
    )
}

export default SearchMobileBar
