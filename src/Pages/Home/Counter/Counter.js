import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBriefcase,
    faCoffee,
    faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";

const Counter = () => {
    return (
        <div className="container mx-auto lg:px-0">
            <div className="rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div
                        className="text-center py-8 lg:rounded-l-md"
                        style={{ backgroundColor: "#0F1F2E" }}
                    >
                        <div>
                            <FontAwesomeIcon
                                icon={faBriefcase}
                                className="text-gray-300 text-3xl mb-2"
                            />
                        </div>
                        <div>
                            <VisibilitySensor
                                partialVisibility
                                offset={{ bottom: 100 }}
                            >
                                {({ isVisible }) => (
                                    <div className="h-8">
                                        {isVisible ? (
                                            <CountUp
                                                end={23}
                                                className="text-gray-300 text-2xl font-medium"
                                            />
                                        ) : null}
                                    </div>
                                )}
                            </VisibilitySensor>
                        </div>
                        <div className="flex justify-center ">
                            <hr className="w-1/5" />
                        </div>
                        <div>
                            <h1 className="text-sm text-gray-400 mt-1">
                                Projects Done
                            </h1>
                        </div>
                    </div>
                    <div
                        className="text-center py-8"
                        style={{ backgroundColor: "#122232" }}
                    >
                        <div>
                            <FontAwesomeIcon
                                icon={faFaceSmile}
                                className="text-gray-300 text-3xl mb-2"
                            />
                        </div>
                        <div>
                            <VisibilitySensor
                                partialVisibility
                                offset={{ bottom: 100 }}
                            >
                                {({ isVisible }) => (
                                    <div className="h-8">
                                        {isVisible ? (
                                            <CountUp
                                                end={51}
                                                className="text-gray-300 text-2xl font-medium"
                                            />
                                        ) : null}
                                    </div>
                                )}
                            </VisibilitySensor>
                        </div>
                        <div className="flex justify-center ">
                            <hr className="w-1/5" />
                        </div>
                        <div>
                            <h1 className="text-sm text-gray-400 mt-1">
                                Happy Clients
                            </h1>
                        </div>
                    </div>
                    <div
                        className="text-center py-8"
                        style={{ backgroundColor: "#152638" }}
                    >
                        <div>
                            <FontAwesomeIcon
                                icon={faCoffee}
                                className="text-gray-300 text-3xl mb-2"
                            />
                        </div>
                        <div>
                            <VisibilitySensor
                                partialVisibility
                                offset={{ bottom: 100 }}
                            >
                                {({ isVisible }) => (
                                    <div className="h-8">
                                        {isVisible ? (
                                            <CountUp
                                                end={550}
                                                className="text-gray-300 text-2xl font-medium"
                                            />
                                        ) : null}
                                    </div>
                                )}
                            </VisibilitySensor>
                        </div>
                        <div className="flex justify-center ">
                            <hr className="w-1/5" />
                        </div>
                        <div>
                            <h1 className="text-sm text-gray-400 mt-1">
                                Cups Of Coffee
                            </h1>
                        </div>
                    </div>
                    <div
                        className="text-center py-8 lg:rounded-r-md"
                        style={{ backgroundColor: "#172B43" }}
                    >
                        <div>
                            <FontAwesomeIcon
                                icon={faUserTie}
                                className="text-gray-300 text-3xl mb-2"
                            />
                        </div>
                        <div>
                            <VisibilitySensor
                                partialVisibility
                                offset={{ bottom: 100 }}
                            >
                                {({ isVisible }) => (
                                    <div className="h-8">
                                        {isVisible ? (
                                            <CountUp
                                                end={8}
                                                className="text-gray-300 text-2xl font-medium"
                                            />
                                        ) : null}
                                    </div>
                                )}
                            </VisibilitySensor>
                        </div>
                        <div className="flex justify-center ">
                            <hr className="w-1/5" />
                        </div>
                        <div>
                            <h1 className="text-sm text-gray-400 mt-1">
                                Partners
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
