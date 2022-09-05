import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Counter from "../Counter/Counter";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import TechUsed from "../TechUsed/TechUsed";

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Services />
            <TechUsed />
            <Projects />
            <Counter />
            <Contact />
        </div>
    );
};

export default Home;
