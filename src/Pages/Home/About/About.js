import React from "react";
import profilePic from "../../../images/profile-pic.jpg";

const About = () => {
    return (
        <div className="container mx-auto my-32 overflow-hidden" id="about-us">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="flex justify-center" data-aos="fade-right">
                    <img src={profilePic} className="w-1/3" alt="" />
                </div>
                <div data-aos="fade-left">
                    <h3 className="text-4xl font-bold text-gray-900 mb-5">
                        Developer and Consultant
                    </h3>
                    <p className="text-gray-500">
                        With 5+ years of professional experience I have acquired
                        the skill to build an website or web app responsive
                        across different devices.
                    </p>
                    <br />
                    <p className="text-gray-500">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Laboriosam recusandae blanditiis voluptatem, magni
                        assumenda pariatur aspernatur ullam odit hic earum!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
