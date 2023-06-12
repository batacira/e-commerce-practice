import { useState } from "react";
import { useToggle } from "react-use";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineSearch } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import logo from '../assets/images/fortnite-logo-1024x324-removebg-preview.png'
import SearchBar from "./SearchBar";
import SearchMobileBar from "./SearchMobileBar";
import { useTranslation, withTranslation } from 'react-i18next';

const Navbar = () => {
    const [expanded, toggle] = useToggle(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useToggle(false)

    const getClassName = ({ isActive }: { isActive: boolean }): string => {
        return isActive ? 'tw-underline' : '';
    };

    const getClassNameMobile = ({ isActive }: { isActive: boolean }): string => {
        return isActive ? 'tw-underline tw-p-2 -tw-m-[1px]' : '';
    };

    const { t } = useTranslation();
    const { i18n } = useTranslation();

    const changeLanguage = (language: string = 'en') => {
        i18n.changeLanguage(language);
        zamenaJezika2(window.location.href)
    };

    console.log(window.location.href);

    const { pathname } = window.location;
    const lang = pathname;

    function zamenaJezika2(string: string) {
        return string.replace('en', 'sr').replace('sr', 'en');
    }


    //TODO: jezik da se promeni u url i da ostane na toj stranici i da promeni jezik // dodaj za mobilni sr i en

    return (
        <>
            <nav className="tw-flex tw-justify-between tw-px-4 tw-items-center tw-max-w-7xl tw-m-auto tw-text-white ">
                <div className="tw-w-48 tw-flex-shrink-0" >
                    <NavLink to={zamenaJezika2('/')}>
                        <img src={logo} alt="logo" />
                    </NavLink>
                </div>
                <div className="lg:tw-hidden tw-flex tw-justify-between tw-items-center tw-w-24"> {/* mobile */}
                    <AiOutlineSearch className="tw-cursor-pointer" size={28} onClick={setIsSearchOpen} />
                    <div className='tw-relative'>
                        <FiShoppingCart size={24} />
                        <div className="tw-absolute tw-bottom-4 tw-left-3.5 tw-flex tw-items-center tw-w-5 tw-h-5 tw-bg-red-500 tw-rounded-full tw-text-white tw-text-xs tw-justify-center">
                            17
                        </div>
                    </div>
                    <GiHamburgerMenu size={24} className='tw-ml-2' onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
                </div>
                {!expanded && <div className=" tw-hidden lg:tw-flex lg:tw-justify-center lg:tw-w-[500px] tw-ml-32 md:tw-ml-2 lg:tw-m-auto">
                    <ul className='tw-flex tw-space-x-5' >
                        <li>
                            <NavLink to={`${i18n.language}/back-blings`} className={getClassName}>
                                {/* {i18n.language === 'sr' ? 'Leđa' : 'Back Blings'} */}
                                {t('backBlings')}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${i18n.language}/gliders`} className={getClassName}>
                                {t('gliders')}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${i18n.language}/pickaxes`} className={getClassName}>
                                {t('pickaxes')}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${i18n.language}/pets`} className={getClassName}>
                                {t('pets')}
                            </NavLink>
                        </li>
                    </ul>
                </div>}
                <SearchBar expanded={expanded} toggle={toggle} />
                <div className={`tw-hidden lg:tw-flex lg:tw-justify-between tw-pl-1 tw-gap-4 tw-ml-4 `}>
                    <div className="tw-flex tw-space-x-3 tw-items-center ">
                        <div className="tw-flex tw-space-x-1 tw-text-xs">
                            {/* @ts-ignore */}
                            <NavLink to={zamenaJezika2(lang)}>
                                {<button onClick={() => changeLanguage('en')}>EN</button>}
                            </NavLink>
                            <span>|</span>
                            <NavLink to={zamenaJezika2(lang)}>
                                {<button onClick={() => changeLanguage('sr')}>SR</button>}
                            </NavLink>

                        </div>
                    </div>
                    <div className="tw-relative">
                        <NavLink to='/card'>
                            <FiShoppingCart size={24} />
                            <div className="tw-absolute tw-bottom-4 tw-left-3.5 tw-flex tw-items-center tw-w-5 tw-h-5 tw-bg-red-500 tw-rounded-full tw-text-white tw-text-xs tw-justify-center">
                                2
                            </div>
                        </NavLink>
                    </div>
                    <div className="tw-flex tw-space-x-2 tw-w-36 tw-text-sm tw-ml-2">
                        <NavLink to={`${i18n.language}/sign-up`}>
                            {t('signUp')}
                        </NavLink>
                        <NavLink to={`${i18n.language}/login`}>
                            {t('login')}
                        </NavLink>
                    </div>
                </div>
            </nav>
            {isSearchOpen && < SearchMobileBar setMobileMenuOpen={setMobileMenuOpen} />}
            {mobileMenuOpen && <div className=" tw-bg-gradient-to-r tw-from-blue-500 tw-to-slate-500 tw-py-4 -tw-m-[1px] lg:tw-p-0"> {/* pitaj za liniju */}

                <ul className='tw-flex-col tw-mx-4 tw-text-blue-900 tw-text-xl tw-bg-white tw-rounded-lg tw-text-center lg:tw-hidden'>
                    <li className=" tw-p-2  -tw-m-[1px]">
                        <NavLink to={'/back-blings'} className={getClassNameMobile}>
                            Back Blings
                        </NavLink>
                    </li>
                    <li className="tw-p-2  -tw-m-[1px]">
                        <NavLink to={'/gliders'} className={getClassNameMobile}>
                            Gliders
                        </NavLink>
                    </li>
                    <li className="tw-p-2  -tw-m-[1px]">
                        <NavLink to={'/pickaxes'} className={getClassNameMobile}>
                            Pickaxes
                        </NavLink>
                    </li>
                    <li className="tw-p-2  -tw-m-[1px]">
                        <NavLink to={'/pets'} className={getClassNameMobile}>
                            Pets
                        </NavLink>
                    </li>
                    <li className="tw-p-2  -tw-m-[1px]">
                        <NavLink to={'/sign-up'} className={getClassNameMobile}>
                            SignUp
                        </NavLink>
                    </li>
                    <li className="tw-p-2  -tw-m-[1px]">
                        <NavLink to={'/login'} className={getClassNameMobile}>
                            Login
                        </NavLink>
                    </li>
                </ul>

            </div>}
        </>
    )
}

export default withTranslation()(Navbar)
