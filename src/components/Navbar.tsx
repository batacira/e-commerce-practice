import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className=" bg-orange-200">
            <ul className="flex">
                <li>
                    <Link to={'/'}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={'/our-products'}>
                        Our Products
                    </Link>
                </li>
                <li>
                    <Link to={'/dashboard'}>
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to={'/sign-up'}>
                        Sign Up
                    </Link>
                </li>
                <li>
                    <Link to={'/login'}>
                        Login
                    </Link>
                </li>
            </ul>

        </div>
    )
}

export default Navbar
