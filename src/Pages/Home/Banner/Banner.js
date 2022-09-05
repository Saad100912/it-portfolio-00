import React from "react";
import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
    return (
        <div
            className="banner-styles flex justify-center items-center px-2"
            id="home"
        >
            {/* <BannerParticles /> */}
            <div className="text-center">
                <h1 className="text-2xl md:text-4xl font-bold text-white">
                    ERP & E-Commerce{" "}
                    <span className="text-red-500">Specialist</span>
                </h1>
                <p className="text-md lg:text-lg text-gray-300 font-medium">
                    We are a one-stop destination for your business to grow and
                    reach at the top of the world
                </p>
                <button className="px-3 py-2 bg-gray-300 font-bold rounded-md mt-3 transition hover:bg-red-500 duration-500">
                    Learn More <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>
        </div>
    );
};

export default Banner;
