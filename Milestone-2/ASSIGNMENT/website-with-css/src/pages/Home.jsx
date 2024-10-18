import React from "react";
import Hero from "../Components/Hero";
import Info from "../components/Info";
import About from "../components/About";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import Doctors from "../Components/Doctors";

function Home() {
    return (
        <div className="home-section">
            <Hero />
            <Info />
            <About />
            <BookAppointment />
            <Reviews />
            <Doctors />
        </div>
    );
}

export default Home;