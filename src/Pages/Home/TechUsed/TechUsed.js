import React from "react";
import "./TechUsed.css";
import reactImg from "../../../images/reactjs.png";
import mongoDBImg from "../../../images/mongodb.jpg";
import nodeImg from "../../../images/nodejs.png";
import expressImg from "../../../images/express.png";
import reactRouterImg from "../../../images/react-router.jpg";
import bootstrapImg from "../../../images/bootstrap.png";
import reactNativeImg from "../../../images/react-native.png";
import reduxImg from "../../../images/redux.png";

const TechUsed = () => {
    return (
        <div className="container mx-auto my-40 overflow-hidden">
            <div data-aos="fade-left">
                <h1 className="gradient-text">Technologies I Use</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div data-aos="fade-left">
                    <div>
                        <a
                            href="https://reactjs.org/"
                            className="flex justify-center"
                        >
                            <img src={reactImg} className="w-1/2" alt="" />
                        </a>
                    </div>
                    <div className="text-center">
                        <a href="https://reactjs.org/">
                            <h2 className="text-xl font-semibold text-gray-800">
                                ReactJs
                            </h2>
                        </a>
                        <p
                            className="text-gray-600"
                            style={{ fontSize: "14px", lineHeight: "16px" }}
                        >
                            React is a free and open-source front-end JavaScript
                            library for building user interfaces based on UI
                            components. It is maintained by Meta and a community
                            of individual developers and companies.
                        </p>
                    </div>
                </div>
                <div data-aos="fade-left">
                    <div>
                        <a
                            href="https://nodejs.org/en/"
                            className="flex justify-center"
                        >
                            <img src={nodeImg} className="w-1/2" alt="" />
                        </a>
                    </div>
                    <div className="text-center">
                        <a href="https://nodejs.org/en/">
                            <h2 className="text-xl font-semibold text-gray-800">
                                NodeJs
                            </h2>
                        </a>
                        <p
                            className="text-gray-600"
                            style={{ fontSize: "14px", lineHeight: "16px" }}
                        >
                            Node.js is an open-source, cross-platform, back-end
                            JavaScript runtime environment that runs on the V8
                            engine and executes JavaScript code outside a web
                            browser, which was designed to build scalable
                            network applications.
                        </p>
                    </div>
                </div>
                <div data-aos="fade-left">
                    <div>
                        <a
                            href="https://www.mongodb.com/"
                            className="flex justify-center"
                        >
                            <img src={mongoDBImg} className="w-1/2" alt="" />
                        </a>
                    </div>
                    <div className="text-center">
                        <a href="https://www.mongodb.com/">
                            <h2 className="text-xl font-semibold text-gray-800">
                                MongoDB
                            </h2>
                        </a>
                        <p
                            className="text-gray-600"
                            style={{ fontSize: "14px", lineHeight: "16px" }}
                        >
                            MongoDB is an open source cross-platform
                            document-oriented database program. Classified as a
                            NoSQL database program, MongoDB uses JSON-like
                            documents with optional schemas.
                        </p>
                    </div>
                </div>
                <div data-aos="fade-left">
                    <div className="flex justify-center">
                        <img
                            src={reactRouterImg}
                            className="w-1/2 rounded-full p-1"
                            alt=""
                        />
                    </div>
                    <div className="text-center">
                        <h2 className="text-xl font-semibold text-gray-800">
                            React Router
                        </h2>
                        <p
                            className="text-gray-600"
                            style={{ fontSize: "14px", lineHeight: "16px" }}
                        >
                            React Router is the standard routing library for
                            React. React Router keeps your UI in sync with the
                            URL. It has a simple API with powerful features like
                            lazy code loading, dynamic route matching, and
                            location transition handling built right in.
                        </p>
                    </div>
                </div>
                <div data-aos="fade-left">
                    <div>
                        <a
                            href="https://expressjs.com/"
                            className="flex justify-center"
                        >
                            <img src={expressImg} className="w-1/2" alt="" />
                        </a>
                    </div>
                    <div className="text-center">
                        <a href="https://expressjs.com/">
                            <h2 className="text-xl font-semibold text-gray-800">
                                ExpressJS
                            </h2>
                        </a>
                        <p
                            className="text-gray-600"
                            style={{ fontSize: "14px", lineHeight: "16px" }}
                        >
                            Express.js, or simply Express, is a back end web
                            application framework for Node.js, released as free
                            and open-source software under the MIT License. It
                            is designed for building web applications and APIs.
                        </p>
                    </div>
                </div>
                <div data-aos="fade-left">
                    <div>
                        <a
                            href="https://getbootstrap.com/"
                            className="flex justify-center"
                        >
                            <img src={bootstrapImg} className="w-1/2" alt="" />
                        </a>
                    </div>
                    <div className="text-center">
                        <a href="https://getbootstrap.com/">
                            <h2 className="text-xl font-semibold text-gray-800">
                                Bootstrap
                            </h2>
                        </a>
                        <p
                            className="text-gray-600"
                            style={{ fontSize: "14px", lineHeight: "16px" }}
                        >
                            Bootstrap is a free and open-source CSS framework
                            directed at responsive, mobile-first front-end web
                            development. It contains HTML, CSS and
                            JavaScript-based design templates for typography,
                            forms, buttons, navigation, and other interface
                            components.
                        </p>
                    </div>
                </div>
                <div data-aos="fade-left">
                    <div className="flex justify-center">
                        <img
                            src={reactNativeImg}
                            className="w-1/2 rounded-full"
                            alt=""
                        />
                    </div>
                    <div className="text-center">
                        <h2 className="text-xl font-semibold text-gray-800">
                            React Native
                        </h2>
                        <p
                            className="text-gray-600"
                            style={{ fontSize: "14px", lineHeight: "16px" }}
                        >
                            React Native is an open-source UI software framework
                            created by Meta Platforms, Inc. It is used to
                            develop applications for Android, Android TV, iOS,
                            macOS, tvOS, Web, Windows and UWP by enabling
                            developers to use the React framework along with
                            native platform capabilities.
                        </p>
                    </div>
                </div>
                <div data-aos="fade-left">
                    <div className="flex justify-center">
                        <img src={reduxImg} className="w-1/2" alt="" />
                    </div>
                    <div className="text-center">
                        <h2 className="text-xl font-semibold text-gray-800">
                            Redux
                        </h2>
                        <p
                            className="text-gray-600"
                            style={{ fontSize: "14px", lineHeight: "16px" }}
                        >
                            Redux is an open-source JavaScript library for
                            managing and centralizing application state. It is
                            most commonly used with libraries such as React or
                            Angular for building user interfaces. Similar to
                            Facebook's Flux architecture, it was created by Dan
                            Abramov and Andrew Clark.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechUsed;
