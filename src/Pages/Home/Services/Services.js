import React from "react";
import appDevImg from "../../../images/app-1.png";
import webDevImg from "../../../images/webpage-1.png";
import businessDevImg from "../../../images/business-1.png";

const Services = () => {
    return (
        <div
            className="container mx-auto my-40 bg-gray-200 py-16 rounded lg:px-20 overflow-hidden"
            id="services"
        >
            <div className="mb-14" data-aos="fade-right">
                <h3 className="font-medium text-gray-600">Our Services</h3>
                <h1 className="text-4xl font-semibold text-gray-900">
                    What Can I Do
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                <div data-aos="fade-right">
                    <div>
                        <img src={appDevImg} className="w-1/3" alt="" />
                    </div>
                    <div className="mt-5">
                        <h3 className="font-semibold text-gray-800 text-xl">
                            Android Development
                        </h3>
                        <p className="text-gray-500 text-sm mt-3">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Unde, ea maiores exercitationem totam
                            cupiditate perferendis.
                        </p>
                    </div>
                </div>
                <div data-aos="fade-right">
                    <div>
                        <img src={webDevImg} className="w-1/3" alt="" />
                    </div>
                    <div className="mt-5">
                        <h3 className="font-semibold text-gray-800 text-xl">
                            MERN Developer
                        </h3>
                        <p className="text-gray-500 text-sm mt-3">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Unde, ea maiores exercitationem totam
                            cupiditate perferendis.
                        </p>
                    </div>
                </div>
                <div data-aos="fade-right">
                    <div>
                        <img src={businessDevImg} className="w-1/3" alt="" />
                    </div>
                    <div className="mt-5">
                        <h3 className="font-semibold text-gray-800 text-xl">
                            Business Development Consultant
                        </h3>
                        <p className="text-gray-500 text-sm mt-3">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Unde, ea maiores exercitationem totam
                            cupiditate perferendis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
