import { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from 'react-icons/fi';
import logo from '../assets/images/fortnite-logo-1024x324-removebg-preview.png'
import SearchBar from "./SearchBar";

const Navbar = () => {
    const [expanded, setExpanded] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (



        <nav className="tw-flex tw-justify-between tw-px-4 tw-items-center tw-max-w-7xl tw-m-auto tw-text-white">
            <div className="tw-w-48 tw-flex-shrink-0" >
                <Link to='/'>
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            {!expanded && <div className="tw-flex tw-justify-between tw-w-96">
                <ul className='tw-flex tw-space-x-4' >
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

                </ul>
            </div>}
            <div className="tw-flex ">
                <SearchBar expanded={expanded} setExpanded={setExpanded} />
            </div>
            <div className={`tw-flex tw-space-x-2`}>
                <ul className="tw-flex tw-space-x-3 tw-items-center tw-mr-20">
                    <li className="tw-flex tw-space-x-2">
                        <Link to='/srpski'>Srpski</Link>
                        <span> | </span>
                        <Link to='/english'>English</Link>
                    </li>
                    <li className="tw-relative tw-mr-2">
                        <Link to='/card'>
                            <FiShoppingCart size={24} />
                            <div className="tw-absolute tw-bottom-4 tw-left-2 tw-flex tw-items-center tw-justify-center tw-w-5 tw-h-5 tw-bg-red-500 tw-rounded-full tw-text-white tw-text-xs">
                                2
                            </div>
                        </Link>
                    </li>
                </ul>
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
    )
}

export default Navbar
