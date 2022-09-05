import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../../images/logo.jpg";

const NavBar = ({ fixed }) => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener("scroll", changeBackground);

    return (
        <div>
            {/* className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500" */}
            <nav className={navbar ? "navbar active" : "navbar"}>
                <div className="container mx-auto px-0 md:px-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a href="#home">
                            <img src={logo} className="w-16" alt="" />
                        </a>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "py-5 px-4 lg:py-0 lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto gap-5 lg:gap-10">
                            <li className="nav-item">
                                <a href="#home" className="navbar-link">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#about-us" className="navbar-link">
                                    About Us
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#services" className="navbar-link">
                                    Services
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#portfolio" className="navbar-link">
                                    Portfolio
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="navbar-link">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
