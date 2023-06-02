import { useState } from "react";
import { useToggle } from "react-use";
import { Link } from "react-router-dom";
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineSearch } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import logo from '../assets/images/fortnite-logo-1024x324-removebg-preview.png'
import SearchBar from "./SearchBar";
import SearchMobileBar from "./SearchMobileBar";

const Navbar = () => {
    const [expanded, toggle] = useToggle(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useToggle(false)

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    console.log(isSearchOpen, 'ddd');


    return (
        <>
            <nav className="tw-flex tw-justify-between tw-px-4 tw-items-center tw-max-w-7xl tw-m-auto tw-text-white">
                <div className="tw-w-48 tw-flex-shrink-0" >
                    <Link to='/'>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="lg:tw-hidden tw-flex tw-justify-between tw-items-center tw-w-24">
                    <AiOutlineSearch className="tw-cursor-pointer" size={28} onClick={setIsSearchOpen} />
                    <div className='tw-relative'>
                        <FiShoppingCart size={24} />
                        <div className="tw-absolute tw-bottom-4 tw-left-3.5 tw-flex tw-items-center tw-w-5 tw-h-5 tw-bg-red-500 tw-rounded-full tw-text-white tw-text-xs tw-justify-center">
                            17
                        </div>
                    </div>
                    <GiHamburgerMenu size={24} className='tw-ml-2' />
                </div>
                {!expanded && <div className=" tw-hidden lg:tw-flex lg:tw-justify-between lg:tw-w-96">
                    <ul className='tw-flex tw-space-x-5' >
                        <li>
                            <Link to={'/back-blings'}>
                                Back Blings
                            </Link>
                        </li>
                        <li>
                            <Link to={'/gliders'}>
                                Gliders
                            </Link>
                        </li>
                        <li>
                            <Link to={'/pickaxes'}>
                                Pickaxes
                            </Link>
                        </li>
                        <li>
                            <Link to={'/pets'}>
                                Pets
                            </Link>
                        </li>

                    </ul>
                </div>}
                <SearchBar expanded={expanded} toggle={toggle} />
                <div className={`tw-hidden lg:tw-flex lg:tw-justify-between tw-pl-1  tw-gap-4 tw-w-80`}>
                    <div className="tw-flex tw-space-x-3 tw-items-center ">
                        <div className="tw-flex tw-space-x-1">
                            <Link to='/srpski'>Srpski</Link>
                            <span>|</span>
                            <Link to='/english'>English</Link>
                        </div>
                    </div>
                    <div className="tw-relative">
                        <Link to='/card'>
                            <FiShoppingCart size={24} />
                            <div className="tw-absolute tw-bottom-4 tw-left-3.5 tw-flex tw-items-center tw-w-5 tw-h-5 tw-bg-red-500 tw-rounded-full tw-text-white tw-text-xs tw-justify-center">
                                2
                            </div>
                        </Link>
                    </div>
                    <div className="tw-flex tw-space-x-1">
                        <Link to={'/sign-up'}>
                            SignUp
                        </Link>
                        <Link to={'/login'}>
                            Login
                        </Link>
                    </div>
                </div>
            </nav>
            {isSearchOpen && < SearchMobileBar />}

        </>

    )
}

export default Navbar
