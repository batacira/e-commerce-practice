import { Link } from "react-router-dom";
import { FiShoppingCart } from 'react-icons/fi';
import logo from '../assets/images/fortnite-logo-1024x324-removebg-preview.png'
import SearchBar from "./SearchBar";

const Navbar = () => {
    return (
        <nav className="tw-flex tw-px-4 tw-items-center tw-max-w-7xl tw-m-auto tw-text-white">
            <div className="tw-w-48 " >
                <Link to='/'>
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <ul className="tw-flex tw-mx-auto tw-ml-12 tw-space-x-4">
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
                    <Link to={'/login'}>
                        Login
                    </Link>
                </li>
                <li>
                    <Link to={'/sign-up'}>
                        Sign Up
                    </Link>
                </li>
            </ul>
            <ul className="tw-flex tw-space-x-3 tw-items-center">
                <div>
                    <SearchBar />
                </div>
                <li>
                    <Link to='/srpski'>Srpski</Link>
                    <span> | </span>
                    <Link to='/english'>English</Link>
                </li>
                <li>
                    <Link to='/card'>
                        <FiShoppingCart />
                    </Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar
