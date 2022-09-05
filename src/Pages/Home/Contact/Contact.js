import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
        <div
            style={{ backgroundColor: "#0B1B36" }}
            className="container mx-auto rounded-md my-40 py-20 lg:px-28"
        >
            <div>
                <h2 className="contact-title text-indigo-700">Get In Touch</h2>
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-32">
                    <div>
                        <p className="text-gray-300 font-semibold text-lg mt-2">
                            Your Name
                        </p>
                        <input
                            type="text"
                            id="name"
                            className="block w-full p-3 rounded-md"
                        />
                        <p className="text-gray-300 font-medium text-lg mt-2">
                            Your Email
                        </p>
                        <input
                            type="text"
                            id="email"
                            className="block w-full p-3 rounded-md"
                        />
                        <p className="text-gray-300 font-medium text-lg mt-2">
                            Subject
                        </p>
                        <input
                            type="text"
                            id="subject"
                            className="block w-full p-3 rounded-md"
                        />
                    </div>
                    <div>
                        <div>
                            <p className="text-gray-300 font-medium text-lg my-2">
                                Message
                            </p>
                            <textarea
                                name=""
                                id="message"
                                className="block w-full h-40 rounded-md p-3"
                            ></textarea>
                        </div>
                        <div className="flex justify-start mt-2">
                            <button className="flex items-center bg-red-500 border-2 border-red-500 px-3 py-2 rounded-lg text-sm font-medium text-gray-300 transition hover:bg-slate-900 duration-300">
                                Send
                                <FontAwesomeIcon
                                    icon={faPaperPlane}
                                    className="inline-block ml-1"
                                />
                                {/* <AiOutlineSend className="inline-block ml-1" /> */}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
