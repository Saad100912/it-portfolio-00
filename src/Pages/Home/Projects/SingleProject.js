import React from "react";
import "./SingleProject.css";
import projectImg from "../../../images/project-img.jpg";

const SingleProject = () => {
    return (
        <div className="card-container" data-aos="fade-right">
            <div className="rounded-lg card">
                <div className="">
                    <img src={projectImg} className="w-full" alt="" />
                </div>
                <div className="p-2 pb-3">
                    <h3 className="text-xl font-semibold text-gray-700 text-center mt-2">
                        Personal Portfolio
                    </h3>
                </div>
                <div className="card-view-button">
                    <button className="bg-gray-900 px-3 py-2 rounded-lg border-2 border-gray-900 text-gray-300 font-medium text-sm transition duration-300 view-button">
                        View Demo
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;
