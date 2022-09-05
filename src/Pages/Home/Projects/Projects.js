import React from "react";
import SingleProject from "./SingleProject";
import "./Projects.css";

const Projects = () => {
    return (
        <div className="my-32 pb-4 overflow-x-hidden" id="portfolio">
            <h1 className="gradient-text" data-aos="fade-right">
                Our <span className="text-blue-900">Works</span>
            </h1>
            <div className="container mx-auto lg:px-12 md:px-6 px-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-16">
                    <SingleProject />
                    <SingleProject />
                    <SingleProject />
                    <SingleProject />
                    <SingleProject />
                    <SingleProject />
                </div>
            </div>
        </div>
    );
};

export default Projects;
