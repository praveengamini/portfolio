import React, { useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [arr0, setArr0] = useState(false);
    const [arr1, setArr1] = useState(false);
    const [arr2, setArr2] = useState(false);
    const [arr3, setArr3] = useState(false);

    const location = useLocation();
    console.log(location.pathname);

    useEffect(() => {
        if (location.pathname === '/skills') {
            setArr0(false);
            setArr1(true);
            setArr2(false);
            setArr3(false);
        } else if (location.pathname === '/') {
            setArr0(true);
            setArr1(false);
            setArr2(false);
            setArr3(false);
        } else if (location.pathname === '/projects') {
            setArr0(false);
            setArr1(false);
            setArr2(true);
            setArr3(false);
        } else if (location.pathname === '/about') {
            setArr0(false);
            setArr1(false);
            setArr2(false);
            setArr3(true);
        }
    }, [location.pathname]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setOpenMenu(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        function handleUnderlining(event) {
            if (event.target.id === 'home') {
                setArr0(true);
                setArr1(false);
                setArr2(false);
                setArr3(false);
            } else if (event.target.id === 'skills') {
                setArr0(false);
                setArr1(true);
                setArr2(false);
                setArr3(false);
            } else if (event.target.id === 'projects') {
                setArr0(false);
                setArr1(false);
                setArr2(true);
                setArr3(false);
            } else if (event.target.id === 'about') {
                setArr0(false);
                setArr1(false);
                setArr2(false);
                setArr3(true);
            }
        }
        document.addEventListener('click', handleUnderlining);
        return () => document.removeEventListener('click', handleUnderlining);
    }, []);

    return (
        <div className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white z-50 fixed w-full">
            <div className="relative text-2xl group">
                <span className="transition-all duration-1000 select-none">Praveen Gamini</span>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-all duration-1000"></div>
            </div>

            <div>
                <button
                    className="md:hidden p-2"
                    id="menuToggle"
                    onClick={() => setOpenMenu(!openMenu)}
                >
                    {!openMenu ? (
                        <GiHamburgerMenu className="text-3xl" />
                    ) : (
                        <div className="text-4xl text-white">X</div> 
                    )}
                </button>
                <div
                    className={`flex-col text-2xl z-10 space-y-10 fixed right-0 top-0 h-full w-64 bg-black/50 backdrop-blur-md backdrop-opacity-95 text-white transform ${
                        openMenu ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 ease-in-out text-center`}
                >
                    <button
                        className="md:hidden p-2 mr-[-13.5rem]"
                        id="menuToggle"
                        onClick={() => setOpenMenu(!openMenu)}
                    >
                        {!openMenu ? (
                            <GiHamburgerMenu className="text-3xl" />
                        ) : (
                            <div className="text-4xl text-white">X</div> 
                        )}
                    </button>
                    <Link to="/">
                        <div
                            className={`hover:text-gray-300 hover:underline cursor-pointer ${
                                arr0 ? 'text-orange-500' : ''
                            } mt-28`}
                            id="home"
                            onClick={() => setOpenMenu(false)}
                        >
                            Home
                        </div>
                    </Link>
                    <Link to="/skills">
                        <div
                            className={`hover:text-gray-300 hover:underline cursor-pointer ${
                                arr1 ? 'text-orange-500' : ''
                            } mt-10`}
                            id="skills"
                            onClick={() => setOpenMenu(false)}
                        >
                            Skills
                        </div>
                    </Link>
                    <Link to="/projects">
                        <div
                            className={`hover:text-gray-300 hover:underline cursor-pointer ${
                                arr2 ? 'text-orange-500' : ''
                            } mt-10`}
                            id="projects"
                            onClick={() => setOpenMenu(false)}
                        >
                            Projects
                        </div>
                    </Link>
                    <Link to="/about">
                        <div
                            className={`hover:text-gray-300 hover:underline cursor-pointer ${
                                arr3 ? 'text-orange-500' : ''
                            } mt-10`}
                            id="about"
                            onClick={() => setOpenMenu(false)}
                        >
                            About
                        </div>
                    </Link>
                </div>
            </div>

            <div className="hidden md:flex space-x-52 mr-16 text-xl">
                <Link to="/">
                    <div
                        className={`hover:text-gray-300 hover:underline cursor-pointer hover:-translate-y-1 transition-all duration-200 ${
                            arr0 ? 'text-orange-500' : ''
                        }`}
                        id="home"
                    >
                        Home
                    </div>
                </Link>
                <Link to="/skills">
                    <div
                        className={`hover:text-gray-300 hover:underline cursor-pointer hover:-translate-y-1 transition-all duration-200 ${
                            arr1 ? 'text-orange-500' : ''
                        }`}
                        id="skills"
                    >
                        Skills
                    </div>
                </Link>
                <Link to="/projects">
                    <div
                        className={`hover:text-gray-300 hover:underline cursor-pointer hover:-translate-y-1 transition-all duration-200 ${
                            arr2 ? 'text-orange-500' : ''
                        }`}
                        id="projects"
                    >
                        Projects
                    </div>
                </Link>
                <Link to="/about">
                    <div
                        className={`hover:text-gray-300 hover:underline cursor-pointer hover:-translate-y-1 transition-all duration-200 ${
                            arr3 ? 'text-orange-500' : ''
                        }`}
                        id="about"
                    >
                        About
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Nav;