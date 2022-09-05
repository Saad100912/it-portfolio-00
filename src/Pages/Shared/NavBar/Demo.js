import React, { useState } from "react";
import logo from "../../../images/logo.jpg";

const Demo = () => {
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
        <div className={navbar ? "navbar active" : "navbar"}>
            <div className="lg:px-10 flex justify-between items-center shadow-md">
                <div>
                    <img src={logo} className="w-16" alt="" />
                </div>
                <div className="flex justify-around gap-20">
                    <a href="#home" className="navbar-link">
                        Home
                    </a>
                    <a href="#about-us" className="navbar-link">
                        About Us
                    </a>
                    <a href="#services" className="navbar-link">
                        Services
                    </a>
                    <a href="#portfolio" className="navbar-link">
                        Portfolio
                    </a>
                    <a href="#contact" className="navbar-link">
                        Contact
                    </a>
                </div>
                <div>
                    <button className="navbar-button bg-red-500 px-4 py-3 rounded-xl tracking-wider font-bold text-white transition hover:bg-gray-900 duration-500">
                        Hire Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Demo;
